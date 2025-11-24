import { Metadata } from 'next';

const blogPostsData: Record<string, {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}> = {
  'how-to-choose-the-right-fence': {
    metaTitle: 'How to Choose the Right Fence? | SRK FENCE Guide',
    metaDescription: 'Complete guide to selecting the perfect fencing solution. Learn about materials, security levels, design considerations, and cost factors.',
    keywords: 'how to choose fence, fence selection guide, best fence for property, fence materials comparison, fence buying guide',
  },
  'ppgi-vs-pvc-fencing-which-is-better': {
    metaTitle: 'PPGI vs PVC Fencing Comparison | SRK FENCE',
    metaDescription: 'Compare PPGI and PVC fencing materials. Understand differences, advantages, durability, maintenance, and best use cases for each.',
    keywords: 'PPGI vs PVC, PPGI fencing, PVC fencing comparison, galvanized iron vs PVC, fence material comparison',
  },
  'fence-height-rules-in-uae': {
    metaTitle: 'Fence Height Rules in UAE | SRK FENCE Regulations Guide',
    metaDescription: 'Complete guide to fence height regulations in UAE. Learn about legal requirements, permits, compliance standards, and building codes.',
    keywords: 'UAE fence height rules, fence regulations UAE, Dubai fence height, Abu Dhabi fence regulations, UAE building codes',
  },
  'best-fencing-for-data-centers': {
    metaTitle: 'Best Fencing for Data Centers | SRK FENCE Security Guide',
    metaDescription: 'Discover optimal fencing solutions for data centers. Security standards, CPNI certification, LPS1175 compliance, and best practices.',
    keywords: 'data center fencing, data center security, CPNI certified fencing, IT infrastructure security, server farm fencing',
  },
  'difference-between-358-and-welded-mesh': {
    metaTitle: '358 vs Welded Mesh Fencing | SRK FENCE Comparison',
    metaDescription: 'Understand the differences between 358 prison mesh and welded mesh fencing. Security levels, applications, and which suits your needs.',
    keywords: '358 mesh vs welded mesh, prison mesh fencing, welded mesh comparison, security mesh types, anti-climb mesh',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPostsData[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | SRK FENCE',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

