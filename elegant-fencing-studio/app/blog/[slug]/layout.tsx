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
  dateModified?: string;
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
    metaTitle: "How to Choose the Right Fence in UAE | Buyer Guide | SRK Fence",
    metaDescription: "Choosing fencing in the UAE? Compare chain link, welded mesh, PVC, steel, anti-climb and temporary systems by security, visibility, coating, gates and project use.",
    keywords: "how to choose fence UAE, fence selection guide UAE, best fence for warehouse UAE, chain link vs welded mesh, anti climb fence UAE, temporary fencing Dubai, fence supplier UAE",
    datePublished: "2024-01-15",
    dateModified: "2026-09-25",
    image: '/blog/how-to-choose-the-right-fence.webp',
  },
  'ppgi-vs-pvc-fencing-which-is-better': {
    metaTitle: "PPGI vs PVC Fencing UAE | Material & Hoarding Guide | SRK Fence",
    metaDescription: "Compare PPGI and PVC fencing for UAE projects. Review material, screening, appearance, corrosion considerations, gates, site use and RFQ details before choosing.",
    keywords: "PPGI vs PVC fencing UAE, PPGI fence panels Dubai, PVC hoarding UAE, construction site fence Dubai, metal hoarding vs PVC, temporary fencing UAE",
    datePublished: "2024-01-10",
    dateModified: "2026-09-25",
    image: '/blog/ppgi-vs-pvc-fencing-which-is-better.webp',
  },
  'fence-height-rules-in-uae': {
    metaTitle: "Fence Height Rules UAE | Dubai & Abu Dhabi Buyer Guide | SRK Fence",
    metaDescription: "Planning a fence in the UAE? Learn why height rules vary by emirate, authority, development and project type, and what to verify before ordering fencing.",
    keywords: "fence height rules UAE, Dubai fence height rules, Abu Dhabi fence regulations, boundary wall UAE, construction site fencing rules Dubai, fence permit UAE",
    datePublished: "2024-01-08",
    dateModified: "2026-09-25",
    image: '/blog/fence-height-rules-in-uae.webp',
  },
  'best-fencing-for-data-centers': {
    metaTitle: "Data Center Security Fencing UAE | Perimeter Guide | SRK Fence",
    metaDescription: "Planning a data center perimeter in the UAE? Compare Anti-Climb 358, welded mesh, secure gates, visibility, coatings and RFQ requirements for sensitive sites.",
    keywords: "data center security fencing UAE, data center fence Dubai, anti climb 358 data center, critical infrastructure fencing UAE, secure perimeter fence, data centre fencing GCC",
    datePublished: "2024-01-05",
    dateModified: "2026-09-25",
    image: '/blog/best-fencing-for-data-centers.webp',
  },
  'difference-between-358-and-welded-mesh': {
    metaTitle: "358 Mesh vs Welded Mesh Fence UAE | Technical Guide | SRK Fence",
    metaDescription: "Compare Anti-Climb 358 mesh with standard welded mesh fencing by opening size, rigidity, security use, visibility, posts, gates and project specification.",
    keywords: "358 mesh vs welded mesh UAE, anti climb 358 fence, welded mesh fence UAE, security mesh comparison, 358 fence Dubai, high security fencing UAE",
    datePublished: "2024-01-03",
    dateModified: "2026-09-25",
    image: '/blog/difference-between-358-and-welded-mesh.webp',
  },
  'chain-link-vs-welded-mesh-fence': {
    metaTitle: "Chain Link vs Welded Mesh Fence UAE | Buyer Comparison | SRK Fence",
    metaDescription: "Chain link or welded mesh? Compare flexibility, rigidity, security, visibility, coatings, posts, gates and cost drivers for UAE and GCC fencing projects.",
    keywords: "chain link vs welded mesh fence UAE, chain link fence Dubai, welded mesh fence UAE, fence comparison UAE, warehouse fencing, industrial fence UAE",
    datePublished: "2024-01-02",
    dateModified: "2026-09-25",
    image: '/blog/chain-link-vs-welded-mesh-fence.webp',
  },
  'pvc-coated-vs-galvanized-chain-link-fence': {
    metaTitle: "PVC Coated vs Galvanized Chain Link Fence UAE | SRK Fence",
    metaDescription: "Compare PVC-coated and galvanized chain link fencing for UAE projects. Review finish, appearance, exposure, posts, gates, maintenance and RFQ details.",
    keywords: "PVC coated vs galvanized chain link fence UAE, PVC chain link fence Dubai, GI chain link fence UAE, green chain link fence, galvanized fence UAE, chain link coating comparison",
    datePublished: "2024-01-01",
    dateModified: "2026-09-25",
    image: '/blog/pvc-coated-vs-galvanized-chain-link-fence.webp',
  },
  'best-fencing-for-construction-sites-in-dubai': {
    metaTitle: "Construction Site Fencing Dubai | Contractor Guide | SRK Fence",
    metaDescription: "Planning site fencing in Dubai? Compare temporary panels, PVC hoarding and chain link by screening, duration, gates, safety, site access and RFQ requirements.",
    keywords: "construction site fencing Dubai, temporary fence Dubai, PVC hoarding Dubai, site hoarding UAE, construction fence supplier UAE, temporary fence panels UAE",
    datePublished: "2023-12-29",
    dateModified: "2026-09-25",
    image: '/blog/best-fencing-for-construction-sites-in-dubai.webp',
  },
  'warehouse-security-fencing-guide': {
    metaTitle: "Warehouse Security Fencing UAE | Buyer Guide | SRK Fence",
    metaDescription: "Choose warehouse fencing in the UAE by comparing chain link, welded mesh, Anti-Climb 358, gates, visibility, coatings and access requirements.",
    keywords: "warehouse security fencing UAE, warehouse fence Dubai, logistics yard fencing UAE, welded mesh warehouse, chain link warehouse fence, anti climb warehouse fence",
    datePublished: "2023-12-28",
    dateModified: "2026-09-25",
    image: '/blog/warehouse-security-fencing-guide.webp',
  },
  'barbed-wire-vs-razor-wire': {
    metaTitle: "Barbed Wire vs Razor Wire: Safety & Compliance | SRK Fence",
    metaDescription: "A safety-focused comparison of barbed wire and razor wire covering general differences, injury risk, compliance and approved perimeter design.",
    keywords: "barbed wire vs razor wire, perimeter security safety, boundary deterrent comparison, security fencing compliance, approved perimeter design",
    datePublished: "2023-12-27",
    dateModified: "2026-09-25",
    image: '/blog/barbed-wire-vs-razor-wire.webp',
  },
  'how-to-prepare-a-fencing-rfq': {
    metaTitle: "Fencing RFQ Template UAE | Procurement Checklist | SRK Fence",
    metaDescription: "Prepare a clearer fencing RFQ with length, height, mesh, wire, coating, posts, gates, drawings, delivery and installation scope for UAE and GCC projects.",
    keywords: "fencing RFQ template UAE, fence quotation request, fencing BOQ UAE, chain link RFQ, welded mesh RFQ, fence supplier quote UAE, fencing procurement checklist",
    datePublished: "2023-12-26",
    dateModified: "2026-09-25",
    image: '/blog/how-to-prepare-a-fencing-rfq.webp',
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
              dateModified: post.dateModified || post.datePublished,
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
