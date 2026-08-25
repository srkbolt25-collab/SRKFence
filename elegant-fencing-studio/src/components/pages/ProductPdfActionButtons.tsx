'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apiClient } from '@/lib/api';
import { getProductSlug } from '@/lib/productSlug';
import { ToastAction } from '@/components/ui/toast';
import { useRFQ } from '@/contexts/RFQContext';
import { useToast } from '@/hooks/use-toast';

type ProductPdfActionButtonsProps = {
  productSlug: string;
  productTitle: string;
};

const aliasToCanonical: Record<string, string> = {
  'gate-hinges': 'gate-hinges-and-locks',
  'post-and-rail-system': 'post-and-railing-system',
  'gabion-wall': 'gabion-wall-and-fencing',
  'color-and-coating-options': 'colors-and-coating-options',
  'anti-climb-358-security-fence': 'anti-climb-358-fence',
  fasteners: 'fasteners-bolts',
  bolts: 'fasteners-bolts',
};

const normalizeSlug = (slug: string) => aliasToCanonical[slug] || slug;

const pdfProductSlugs = new Set([
  'fence-posts-gi-ms-pvc',
  'panel-post-system',
  'high-security-gate-systems',
  'base-plates',
  'gate-hinges-and-locks',
  'post-and-railing-system',
  'pvc-decorative-fence',
  'pvc-privacy-fence',
  'anti-climb-358-fence',
  'rectangle-mesh-fence',
  'gabion-wall-and-fencing',
  'clamps-and-connectors',
  'fence-accessories',
  'fasteners-bolts',
  'coating-materials',
  'colors-and-coating-options',
  'barbed-wire',
  'razor-wire',
  'temporary-fence-panels',
]);


const normalizeText = (value: unknown) =>
  String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const stringifyDescription = (description: unknown) => {
  if (Array.isArray(description)) {
    return description.map((item: any) => `${item?.title || ''} ${item?.content || ''}`).join(' ');
  }
  return typeof description === 'string' ? description : '';
};

const getPdfSlugFromProduct = (product: any) => {
  const title = product?.title || product?.name || '';
  const directCandidates = [
    getProductSlug({ title, name: product?.name, id: product?.id }),
    product?.id || '',
  ].map(normalizeSlug);

  for (const candidate of directCandidates) {
    if (candidate && pdfProductSlugs.has(candidate)) return candidate;
  }

  const haystack = normalizeText(`${title} ${product?.name || ''} ${product?.category || ''} ${stringifyDescription(product?.description)}`);

  if (haystack.includes('fence post') || haystack.includes('gi ms pvc')) return 'fence-posts-gi-ms-pvc';
  if (haystack.includes('panel post')) return 'panel-post-system';
  if (haystack.includes('high security gate') || haystack.includes('sliding gate') || haystack.includes('swing gate')) return 'high-security-gate-systems';
  if (haystack.includes('base plate')) return 'base-plates';
  if (haystack.includes('gate hinge') || haystack.includes('gate lock')) return 'gate-hinges-and-locks';
  if (haystack.includes('post rail') || haystack.includes('railing system')) return 'post-and-railing-system';
  if (haystack.includes('pvc decorative')) return 'pvc-decorative-fence';
  if (haystack.includes('pvc privacy')) return 'pvc-privacy-fence';
  if (haystack.includes('anti climb') || haystack.includes('358 security')) return 'anti-climb-358-fence';
  if (haystack.includes('rectangle mesh')) return 'rectangle-mesh-fence';
  if (haystack.includes('gabion')) return 'gabion-wall-and-fencing';
  if (haystack.includes('clamps') || haystack.includes('connectors')) return 'clamps-and-connectors';
  if (haystack.includes('fence accessories')) return 'fence-accessories';
  if (haystack.includes('fastener') || haystack.includes('bolts') || haystack.includes('nuts')) return 'fasteners-bolts';
  if (haystack.includes('coating materials')) return 'coating-materials';
  if (haystack.includes('color') && haystack.includes('coating')) return 'colors-and-coating-options';
  if (haystack.includes('barbed wire')) return 'barbed-wire';
  if (haystack.includes('razor wire')) return 'razor-wire';
  if (haystack.includes('temporary fence')) return 'temporary-fence-panels';

  return '';
};

export default function ProductPdfActionButtons({ productSlug, productTitle }: ProductPdfActionButtonsProps) {
  const router = useRouter();
  const { addToRFQ, isInRFQ } = useRFQ();
  const { toast } = useToast();
  const canonicalPageSlug = normalizeSlug(productSlug);
  const [rfqProductId, setRfqProductId] = useState(canonicalPageSlug);
  const [isAdding, setIsAdding] = useState(false);

  const resolveProductId = useCallback(async () => {
    try {
      const response = await apiClient.getProducts();
      const products = response.products || [];
      const normalizedPageTitle = normalizeText(productTitle);

      const matchedProduct = products.find((product: any) => {
        const title = product?.title || product?.name || '';
        const directSlug = normalizeSlug(getProductSlug({ title, name: product?.name, id: product?.id }));
        const mappedSlug = normalizeSlug(getPdfSlugFromProduct(product));
        const normalizedProductTitle = normalizeText(title);

        return (
          product?.id === productSlug ||
          directSlug === canonicalPageSlug ||
          mappedSlug === canonicalPageSlug ||
          normalizedProductTitle === normalizedPageTitle ||
          normalizedProductTitle.includes(normalizedPageTitle) ||
          normalizedPageTitle.includes(normalizedProductTitle)
        );
      });

      const resolvedId = matchedProduct?.id || canonicalPageSlug;
      setRfqProductId(resolvedId);
      return resolvedId;
    } catch (error) {
      console.error('Error resolving product for RFQ:', error);
      setRfqProductId(canonicalPageSlug);
      return canonicalPageSlug;
    }
  }, [canonicalPageSlug, productSlug, productTitle]);

  useEffect(() => {
    let mounted = true;

    resolveProductId().then((resolvedId) => {
      if (mounted) setRfqProductId(resolvedId);
    });

    return () => {
      mounted = false;
    };
  }, [resolveProductId]);

  const handleAddToRFQ = async () => {
    if (isAdding) return;
    setIsAdding(true);

    try {
      const targetProductId = await resolveProductId();

      if (isInRFQ(targetProductId) || isInRFQ(canonicalPageSlug)) {
        toast({
          title: 'Already in RFQ',
          description: `${productTitle} is already in your Request for Quote list.`,
          action: (
            <ToastAction altText="View RFQ" onClick={() => router.push('/rfq')}>
              View RFQ
            </ToastAction>
          ),
        });
        return;
      }

      addToRFQ(targetProductId);

      toast({
        title: 'Added to RFQ',
        description: `${productTitle} has been added to your Request for Quote list.`,
        action: (
          <ToastAction altText="View RFQ" onClick={() => router.push('/rfq')}>
            View RFQ
          </ToastAction>
        ),
      });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-3">
      <Button
        asChild
        size="lg"
        className="h-auto min-w-0 rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-3 py-3 text-[11px] font-bold uppercase tracking-wide text-white hover:shadow-glow sm:px-8 sm:py-5 sm:text-sm"
      >
        <Link href="/contact" className="flex items-center justify-center whitespace-nowrap">
          Request a Quote
          <FileText className="hidden sm:ml-2 sm:block sm:h-5 sm:w-5" />
        </Link>
      </Button>
      <Button
        type="button"
        size="lg"
        onClick={handleAddToRFQ}
        disabled={isAdding}
        className="h-auto min-w-0 rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-3 py-3 text-[11px] font-bold uppercase tracking-wide text-white hover:shadow-glow sm:px-8 sm:py-5 sm:text-sm"
      >
        <span className="whitespace-nowrap">{isAdding ? 'Adding...' : 'Add RFQ'}</span>
        <FileText className="hidden sm:ml-2 sm:block sm:h-5 sm:w-5" />
      </Button>
    </div>
  );
}
