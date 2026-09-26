'use client';

import { useState, useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Search, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { apiClient } from '@/lib/api';
import {
  buildItemListSchema,
  buildWebPageSchema,
  staticSeoProfiles,
} from '@/lib/seo';

const defaultBlogPosts = [
  {
    slug: 'fencing-supplier-abu-dhabi-guide',
    title: 'Planning a Fencing Project in Abu Dhabi: How to Choose the Right Supplier and System',
    description: 'Planning fencing in Abu Dhabi? Learn how to choose chain link, welded mesh, steel or security fencing and prepare a clear project quotation.',
    image: '/blog/fencing-supplier-abu-dhabi-guide.webp',
    category: 'Project Guide',
    readTime: '13 min read',
    date: '2026-08-21',
  },
  {
    slug: 'how-to-compare-fencing-suppliers-uae',
    title: 'How to Compare Fencing Suppliers in the UAE: A Procurement Guide',
    description: 'Comparing fencing suppliers in the UAE? Use this practical procurement guide to assess specifications, quotations, gates, installation and technical support.',
    image: '/blog/how-to-compare-fencing-suppliers-uae.webp',
    category: 'Procurement Guide',
    readTime: '14 min read',
    date: '2026-08-20',
  },
  {
    slug: 'chain-link-fencing-dubai-buyer-guide',
    title: 'Choosing Chain Link Fencing in Dubai: A Specification Guide for Buyers',
    description: 'Buying chain link fencing in Dubai? Learn what to check before ordering, including mesh size, wire diameter, coating, posts, gates and installation.',
    image: '/blog/chain-link-fencing-dubai-buyer-guide.webp',
    category: 'Specification Guide',
    readTime: '13 min read',
    date: '2026-08-19',
  },
  {
    slug: 'steel-metal-fencing-dubai-guide',
    title: 'Steel Fencing in Dubai: How to Choose the Right System for Your Project',
    description: 'Choosing steel or metal fencing in Dubai? Learn how to compare designs, coatings, posts, gates and security requirements before requesting a quote.',
    image: '/blog/steel-metal-fencing-dubai-guide.webp',
    category: 'Buyer Guide',
    readTime: '13 min read',
    date: '2026-08-18',
  },
  {
    slug: 'fencing-cost-dubai-guide',
    title: 'How Much Does Fencing Cost in Dubai? A Practical Buyer’s Guide',
    description: 'Planning a fencing project in Dubai? Learn what affects fencing prices, how to compare quotations and what to send SRK Fence for an accurate project quote.',
    image: '/blog/fencing-cost-dubai-guide.webp',
    category: 'Cost Guide',
    readTime: '12 min read',
    date: '2026-08-17',
  },
  {
    slug: 'how-to-choose-the-right-fence',
    title: "How to Choose the Right Fence for Your UAE Project",
    description: "A practical buyer guide to choosing chain link, welded mesh, PVC, steel, anti-climb and temporary fencing based on security, visibility, site use and budget.",
    image: '/blog/how-to-choose-the-right-fence.webp',
    category: "Buyer Guide",
    readTime: "11 min read",
    date: '2024-01-15',
  },
  {
    slug: 'ppgi-vs-pvc-fencing-which-is-better',
    title: "PPGI vs PVC Fencing in UAE: Which System Fits Your Project?",
    description: "Compare PPGI metal panels and PVC fencing for UAE construction, hoarding and boundary projects by durability, appearance, screening, handling and quotation scope.",
    image: '/blog/ppgi-vs-pvc-fencing-which-is-better.webp',
    category: "Material Comparison",
    readTime: "10 min read",
    date: '2024-01-10',
  },
  {
    slug: 'fence-height-rules-in-uae',
    title: "Fence Height Rules in the UAE: What Buyers Should Verify Before Ordering",
    description: "A practical UAE guide to checking fence height, boundary-wall, temporary-site and privacy-screen requirements before ordering or installing a fence.",
    image: '/blog/fence-height-rules-in-uae.webp',
    category: "Compliance Guide",
    readTime: "11 min read",
    date: '2024-01-08',
  },
  {
    slug: 'best-fencing-for-data-centers',
    title: "Data Center Security Fencing in the UAE: How to Plan the Perimeter",
    description: "A project guide to data center perimeter fencing, comparing Anti-Climb 358, welded mesh, gates, visibility and layered security requirements for UAE sites.",
    image: '/blog/best-fencing-for-data-centers.webp',
    category: "Security Project Guide",
    readTime: "12 min read",
    date: '2024-01-05',
  },
  {
    slug: 'difference-between-358-and-welded-mesh',
    title: "358 Mesh vs Welded Mesh Fence: What Is the Difference?",
    description: "A technical buyer comparison of Anti-Climb 358 and standard welded mesh fencing for UAE security, industrial, warehouse and infrastructure projects.",
    image: '/blog/difference-between-358-and-welded-mesh.webp',
    category: "Technical Comparison",
    readTime: "11 min read",
    date: '2024-01-03',
  },
  {
    slug: 'chain-link-vs-welded-mesh-fence',
    title: "Chain Link vs Welded Mesh Fence: Which Is Better for Your Project?",
    description: "Compare chain link and welded mesh fencing for UAE and GCC projects by structure, cost drivers, security, appearance, posts, gates and installation scope.",
    image: '/blog/chain-link-vs-welded-mesh-fence.webp',
    category: "Buyer Comparison",
    readTime: "11 min read",
    date: '2024-01-02',
  },
  {
    slug: 'pvc-coated-vs-galvanized-chain-link-fence',
    title: "PVC-Coated vs Galvanized Chain Link Fence: Which Finish Should You Choose?",
    description: "Compare PVC-coated and galvanized chain link fencing for UAE projects by appearance, coating, site exposure, maintenance, colour and quotation details.",
    image: '/blog/pvc-coated-vs-galvanized-chain-link-fence.webp',
    category: "Finish Comparison",
    readTime: "10 min read",
    date: '2024-01-01',
  },
  {
    slug: 'best-fencing-for-construction-sites-in-dubai',
    title: "Best Fencing for Construction Sites in Dubai: A Contractor\u2019s Selection Guide",
    description: "Compare temporary fence panels, PVC hoarding, chain link and other site-boundary options for Dubai construction projects based on safety, screening, duration and access.",
    image: '/blog/best-fencing-for-construction-sites-in-dubai.webp',
    category: "Construction Guide",
    readTime: "12 min read",
    date: '2023-12-29',
  },
  {
    slug: 'warehouse-security-fencing-guide',
    title: "Warehouse Security Fencing in the UAE: How to Choose the Right Perimeter",
    description: "A warehouse fencing buyer guide covering chain link, welded mesh, Anti-Climb 358, gates, vehicle access, visibility and RFQ planning for UAE logistics sites.",
    image: '/blog/warehouse-security-fencing-guide.webp',
    category: "Warehouse Guide",
    readTime: "12 min read",
    date: '2023-12-28',
  },
  {
    slug: 'barbed-wire-vs-razor-wire',
    title: "Barbed Wire vs Razor Wire: Safety and Compliance Overview",
    description: "A safety-focused comparison covering general differences, injury risk, compliance and approved perimeter design.",
    image: '/blog/barbed-wire-vs-razor-wire.webp',
    category: "Security Comparison",
    readTime: "8 min read",
    date: '2023-12-27',
  },
  {
    slug: 'how-to-prepare-a-fencing-rfq',
    title: "How to Prepare a Fencing RFQ: A Practical Checklist for UAE & GCC Buyers",
    description: "A procurement-ready fencing RFQ guide covering dimensions, mesh, wire, coating, posts, gates, drawings, delivery, installation and comparison of supplier quotations.",
    image: '/blog/how-to-prepare-a-fencing-rfq.webp',
    category: "Procurement Guide",
    readTime: "11 min read",
    date: '2023-12-26',
  },
];

const trendingProducts = [
  { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
  { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
  { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
  { label: 'Temporary Fence Panels', href: '/products/temporary-fence-panels' },
  { label: 'Barbed Wire', href: '/products/barbed-wire' },
  { label: 'Razor Wire', href: '/products/razor-wire' },
];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getBlogPosts();
      const publishedPosts = (response.blogPosts || []).filter((post: any) => post.status === 'Published');
      const publishedSlugs = new Set(publishedPosts.map((post: any) => post.slug));
      const mergedPosts = [
        ...publishedPosts,
        ...defaultBlogPosts.filter((post) => !publishedSlugs.has(post.slug)),
      ];
      setBlogPosts(mergedPosts);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      setBlogPosts(defaultBlogPosts);
    } finally {
      setLoading(false);
    }
  };

  const recentPosts = blogPosts.length ? blogPosts.slice(0, 5) : defaultBlogPosts.slice(0, 5);

  return (
    <>
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'SRK Fence Blog',
            description: staticSeoProfiles.blog.description,
            url: 'https://www.srkfencing.com/blog',
            inLanguage: 'en',
            publisher: {
              '@type': 'Organization',
              name: 'SRK Fence',
              url: 'https://www.srkfencing.com',
            },
            blogPost: defaultBlogPosts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              url: `https://www.srkfencing.com/blog/${post.slug}`,
              datePublished: post.date,
              dateModified: post.date,
              image: `https://www.srkfencing.com${post.image}`,
            })),
          },
          buildWebPageSchema(
            staticSeoProfiles.blog.title,
            staticSeoProfiles.blog.description,
            '/blog',
            staticSeoProfiles.blog.keywords,
          ),
          buildItemListSchema(
            'SRK Fence fencing guides',
            defaultBlogPosts.map((post) => ({ label: post.title, href: `/blog/${post.slug}` })),
          ),
        ]}
      />
      <SiteLayout>
        <section className="border-b border-border/70 bg-white py-12 sm:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Blog</span>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Fencing Blog & Project Guides
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                Practical guides for fencing cost, supplier comparison, chain link specifications and project planning across Dubai, Abu Dhabi and the UAE.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-12 sm:py-16">
          <div className="container mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
            <main>
              {loading ? (
                <div className="flex items-center justify-center py-24">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
                  {blogPosts.map((post) => {
                    const imageSrc = post.image || '/blog/fencing-cost-dubai-guide.webp';
                    return (
                      <article key={post.slug} className="group border-b border-border/70 pb-10">
                        <Link href={`/blog/${post.slug}`} className="block">
                          <div className="relative aspect-[1200/628] w-full overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-border/70">
                            <Image
                              src={imageSrc}
                              alt={post.title}
                              fill
                              className="object-contain object-center bg-white transition-transform duration-500 group-hover:scale-[1.01]"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 430px"
                            />
                          </div>
                        </Link>
                        <div className="mt-5">
                          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                            {post.category}
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-2xl font-extrabold leading-tight text-foreground transition-colors group-hover:text-primary">
                              {post.title}
                            </h2>
                          </Link>
                          <p className="mt-4 text-[15px] leading-7 text-muted-foreground line-clamp-3">
                            {post.description}
                          </p>
                          <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="inline-flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center text-sm font-bold text-primary hover:underline">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </main>

            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-sm border border-border bg-white p-6 shadow-sm">
                <h3 className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Search</h3>
                <div className="mt-5 flex rounded-sm border border-border bg-background px-3 py-2">
                  <input className="w-full bg-transparent text-sm outline-none" placeholder="Search articles..." />
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="rounded-sm border border-border bg-white p-6 shadow-sm">
                <h3 className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Our Trending Products</h3>
                <div className="mt-5 divide-y divide-border">
                  {trendingProducts.map((item) => (
                    <Link key={item.href} href={item.href} className="block py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-sm border border-border bg-white p-6 shadow-sm">
                <h3 className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Recent Posts</h3>
                <div className="mt-5 space-y-4">
                  {recentPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block text-sm font-semibold leading-6 text-foreground transition-colors hover:text-primary">
                      {post.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-sm bg-primary p-6 text-white shadow-sm">
                <h3 className="text-xl font-extrabold">Need fencing advice?</h3>
                <p className="mt-3 text-sm leading-6 text-white/90">Send your project details and our team will help you choose the right fencing system.</p>
                <Button asChild className="mt-5 w-full bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </aside>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
