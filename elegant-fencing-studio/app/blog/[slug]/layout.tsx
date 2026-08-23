import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import {
  buildBreadcrumbSchema,
  buildSeoMetadata,
  buildWebPageSchema,
  companyName,
  getBlogKeywordSet,
  siteUrl,
} from '@/lib/seo';

const blogPostsData: Record<string, {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  datePublished?: string;
  image?: string;
}> = {
  'fencing-supplier-abu-dhabi-guide': {
    metaTitle: "Fencing Suppliers in Abu Dhabi: A Project Buyer’s Guide | SRK Fence",
    metaDescription: "Planning fencing in Abu Dhabi? Learn how to choose chain link, welded mesh, steel or security fencing and prepare a clear project quotation.",
    keywords: "fencing suppliers Abu Dhabi, fencing supplier Abu Dhabi, fence contractor Abu Dhabi, chain link fence Abu Dhabi, welded mesh fence Abu Dhabi, Abu Dhabi fencing quotation",
    datePublished: "2026-08-21",
    image: '/blog/fencing-supplier-abu-dhabi-guide.webp',
  },
  'how-to-compare-fencing-suppliers-uae': {
    metaTitle: "How to Compare Fencing Suppliers in the UAE | SRK Fence",
    metaDescription: "Comparing fencing suppliers in the UAE? Use this practical procurement guide to assess specifications, quotations, gates, installation and technical support.",
    keywords: "fencing suppliers UAE, best fencing supplier Dubai, fence contractor UAE, fencing quotation comparison UAE, fencing procurement guide, supplier evaluation UAE",
    datePublished: "2026-08-20",
    image: '/blog/how-to-compare-fencing-suppliers-uae.webp',
  },
  'chain-link-fencing-dubai-buyer-guide': {
    metaTitle: "Chain Link Fencing in Dubai: Complete Buyer’s Guide | SRK Fence",
    metaDescription: "Buying chain link fencing in Dubai? Learn what to check before ordering, including mesh size, wire diameter, coating, posts, gates and installation.",
    keywords: "chain link fencing Dubai, chain link fence supplier Dubai, galvanized chain link fence UAE, PVC coated chain link fence Dubai, chain link fence specification, fence mesh opening",
    datePublished: "2026-08-19",
    image: '/blog/chain-link-fencing-dubai-buyer-guide.webp',
  },
  'steel-metal-fencing-dubai-guide': {
    metaTitle: "Steel Fencing in Dubai: Buyer’s Guide to Materials & Design | SRK Fence",
    metaDescription: "Choosing steel or metal fencing in Dubai? Learn how to compare designs, coatings, posts, gates and security requirements before requesting a quote.",
    keywords: "steel fencing Dubai, metal fencing supplier in Dubai, fabricated steel fence UAE, steel fence gates Dubai, powder coated steel fencing, galvanized steel fence UAE",
    datePublished: "2026-08-18",
    image: '/blog/steel-metal-fencing-dubai-guide.webp',
  },
  'fencing-cost-dubai-guide': {
    metaTitle: "Fencing Cost in Dubai: What Really Affects Your Quote? | SRK Fence",
    metaDescription: "Planning a fencing project in Dubai? Learn what affects fencing prices, how to compare quotations and what to send SRK Fence for an accurate project quote.",
    keywords: "fencing cost Dubai, fencing supplier in Dubai price, fence quotation Dubai, fencing price per metre Dubai, chain link fence cost Dubai, welded mesh fence quotation UAE, fence supplier Dubai",
    datePublished: "2026-08-17",
    image: '/blog/fencing-cost-dubai-guide.webp',
  },
  'how-to-choose-the-right-fence': {
    metaTitle: 'How to Choose a Fence in UAE | SRK Fence Buying Guide',
    metaDescription: 'Guide to choosing chain link, welded mesh, PVC, steel, anti-climb and security fencing for UAE homes, warehouses, farms and industrial sites.',
    keywords: 'how to choose fence UAE, fence selection guide, best fence for property, fence materials comparison, fence buying guide',
  },
  'ppgi-vs-pvc-fencing-which-is-better': {
    metaTitle: 'PPGI vs PVC Fencing UAE | Fence Material Comparison',
    metaDescription: 'Compare PPGI fencing and PVC fencing for UAE projects, including durability, coating, appearance, maintenance and common fence applications.',
    keywords: 'PPGI vs PVC fencing UAE, PPGI fencing, PVC fencing comparison, galvanized iron vs PVC, fence material comparison',
  },
  'fence-height-rules-in-uae': {
    metaTitle: 'Fence Height Rules UAE | Dubai and Abu Dhabi Fence Guide',
    metaDescription: 'Guide to fence height rules in UAE, including Dubai and Abu Dhabi planning considerations, permits, boundary fence requirements and RFQ details.',
    keywords: 'UAE fence height rules, fence regulations UAE, Dubai fence height, Abu Dhabi fence regulations, UAE building codes',
  },
  'best-fencing-for-data-centers': {
    metaTitle: 'Best Fencing for Data Centers UAE | Anti-Climb Fence Guide',
    metaDescription: 'Data center security fencing guide for UAE projects, covering anti-climb 358 fence, welded mesh, razor wire, gates and perimeter protection.',
    keywords: 'data center fencing UAE, data center security fencing, anti climb 358 fence, critical infrastructure fencing, server farm fencing',
  },
  'difference-between-358-and-welded-mesh': {
    metaTitle: '358 Fence vs Welded Mesh UAE | Anti-Climb Security Mesh',
    metaDescription: 'Compare 358 anti-climb fence and welded mesh fence for UAE security projects, including mesh size, strength, visibility and perimeter use cases.',
    keywords: '358 mesh vs welded mesh UAE, prison mesh fencing, welded mesh comparison, security mesh types, anti-climb mesh',
  },
  'chain-link-vs-welded-mesh-fence': {
    metaTitle: 'Chain Link Fence vs Welded Mesh Fence UAE',
    metaDescription: 'Compare chain link fence and welded mesh fence for UAE projects. Learn differences in cost, strength, security, visibility, applications and RFQ details.',
    keywords: 'chain link vs welded mesh fence, chain link fence UAE, welded mesh fence UAE, fencing comparison',
  },
  'pvc-coated-vs-galvanized-chain-link-fence': {
    metaTitle: 'PVC Coated vs Galvanized Chain Link Fence UAE',
    metaDescription: 'Compare PVC coated chain link fence and galvanized GI chain link fence for outdoor UAE and GCC fencing projects.',
    keywords: 'PVC coated vs galvanized fence, PVC coated chain link fence, GI chain link fence, galvanized chain link fence',
  },
  'best-fencing-for-construction-sites-in-dubai': {
    metaTitle: 'Best Fencing for Construction Sites in Dubai',
    metaDescription: 'Guide to construction site fencing in Dubai, including temporary fence panels, PVC hoarding, chain link fence, gates and RFQ details.',
    keywords: 'construction site fencing Dubai, temporary fence supplier UAE, PVC hoarding fence Dubai, site boundary fence',
  },
  'warehouse-security-fencing-guide': {
    metaTitle: 'Warehouse Security Fencing Guide UAE',
    metaDescription: 'Learn how to choose warehouse security fencing in UAE with chain link, welded mesh, anti-climb fence, steel fencing, gates and access control.',
    keywords: 'warehouse security fencing UAE, warehouse fencing Dubai, chain link fence warehouse, welded mesh warehouse fence',
  },
  'barbed-wire-vs-razor-wire': {
    metaTitle: 'Barbed Wire vs Razor Wire UAE',
    metaDescription: 'Compare barbed wire and razor wire for farms, industrial sites, fence toppings and high-security perimeter projects in UAE and GCC.',
    keywords: 'barbed wire vs razor wire, barbed wire supplier UAE, razor wire supplier UAE, perimeter security wire',
  },
  'how-to-prepare-a-fencing-rfq': {
    metaTitle: 'Fencing RFQ Template UAE | How to Prepare a Fence Quote',
    metaDescription: 'Fencing RFQ checklist for buyers: product, project type, fence height, running meters, mesh opening, wire diameter, coating, gates and delivery.',
    keywords: 'fencing RFQ template, fence quotation UAE, fencing supplier RFQ, fence project specification',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPostsData[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | SRK FENCE',
    };
  }

  return buildSeoMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${params.slug}`,
    keywords: getBlogKeywordSet(params.slug, post.keywords.split(',').map((keyword) => keyword.trim())),
    image: post.image || '/SRK FENCE Banners.webp',
    intent: `Blog article for ${post.keywords} and buyer education before RFQ.`,
  });
}

export default function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const post = blogPostsData[params.slug];

  return (
    <>
      {post && (
        <StructuredData
          data={[
            {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metaTitle,
              description: post.metaDescription,
              articleSection: 'Fencing Project Guides',
              inLanguage: 'en',
              url: `${siteUrl}/blog/${params.slug}`,
              author: {
                '@type': 'Organization',
                name: companyName,
              },
              publisher: {
                '@type': 'Organization',
                name: companyName,
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${siteUrl}/blog/${params.slug}`,
              },
              image: post.image ? `${siteUrl}${post.image}` : `${siteUrl}/SRK FENCE Banners.webp`,
              datePublished: post.datePublished,
              dateModified: post.datePublished,
              keywords: getBlogKeywordSet(params.slug, post.keywords.split(',').map((keyword) => keyword.trim())).join(', '),
            },
            buildWebPageSchema(
              post.metaTitle,
              post.metaDescription,
              `/blog/${params.slug}`,
              getBlogKeywordSet(params.slug, post.keywords.split(',').map((keyword) => keyword.trim())),
            ),
            buildBreadcrumbSchema([
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.metaTitle.split('|')[0].trim(), href: `/blog/${params.slug}` },
            ]),
          ]}
        />
      )}
      {children}
    </>
  );
}
