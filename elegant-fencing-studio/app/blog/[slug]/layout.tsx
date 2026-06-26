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
}> = {
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
    image: '/SRK FENCE Banners.webp',
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
              '@type': 'Article',
              headline: post.metaTitle,
              description: post.metaDescription,
              url: `${siteUrl}/blog/${params.slug}`,
              author: {
                '@type': 'Organization',
                name: companyName,
              },
              publisher: {
                '@type': 'Organization',
                name: companyName,
              },
              mainEntityOfPage: `${siteUrl}/blog/${params.slug}`,
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
