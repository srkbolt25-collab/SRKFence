'use client';

import { useState, useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import HeroBannerSlider from '@/components/HeroBannerSlider';
import { UNUSED_BANNERS_SLIDES } from '@/lib/unusedHeroBanners';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, BookOpen, Loader2 } from 'lucide-react';
import Image from 'next/image';
import heroFence from '@/assets/hero-fence.jpg';
import metalFence from '@/assets/metal-fence.jpg';
import { apiClient } from '@/lib/api';
import {
  blogKeywordProfiles,
  buildItemListSchema,
  buildWebPageSchema,
  staticSeoProfiles,
} from '@/lib/seo';

const defaultBlogPosts = [
  {
    slug: 'fencing-supplier-abu-dhabi-guide',
    title: "Planning a Fencing Project in Abu Dhabi: How to Choose the Right Supplier and System",
    description: "Planning fencing in Abu Dhabi? Learn how to choose chain link, welded mesh, steel or security fencing and prepare a clear project quotation.",
    image: '/blog/fencing-supplier-abu-dhabi-guide.webp',
    category: "Project Guide",
    readTime: "13 min read",
    date: "2026-08-21",
  },
  {
    slug: 'how-to-compare-fencing-suppliers-uae',
    title: "How to Compare Fencing Suppliers in the UAE: A Procurement Guide",
    description: "Comparing fencing suppliers in the UAE? Use this practical procurement guide to assess specifications, quotations, gates, installation and technical support.",
    image: '/blog/how-to-compare-fencing-suppliers-uae.webp',
    category: "Procurement Guide",
    readTime: "14 min read",
    date: "2026-08-20",
  },
  {
    slug: 'chain-link-fencing-dubai-buyer-guide',
    title: "Choosing Chain Link Fencing in Dubai: A Specification Guide for Buyers",
    description: "Buying chain link fencing in Dubai? Learn what to check before ordering, including mesh size, wire diameter, coating, posts, gates and installation.",
    image: '/blog/chain-link-fencing-dubai-buyer-guide.webp',
    category: "Specification Guide",
    readTime: "13 min read",
    date: "2026-08-19",
  },
  {
    slug: 'steel-metal-fencing-dubai-guide',
    title: "Steel Fencing in Dubai: How to Choose the Right System for Your Project",
    description: "Choosing steel or metal fencing in Dubai? Learn how to compare designs, coatings, posts, gates and security requirements before requesting a quote.",
    image: '/blog/steel-metal-fencing-dubai-guide.webp',
    category: "Buyer Guide",
    readTime: "13 min read",
    date: "2026-08-18",
  },
  {
    slug: 'fencing-cost-dubai-guide',
    title: "How Much Does Fencing Cost in Dubai? A Practical Buyer’s Guide",
    description: "Planning a fencing project in Dubai? Learn what affects fencing prices, how to compare quotations and what to send SRK Fence for an accurate project quote.",
    image: '/blog/fencing-cost-dubai-guide.webp',
    category: "Cost Guide",
    readTime: "12 min read",
    date: "2026-08-17",
  },
  {
    slug: 'how-to-choose-the-right-fence',
    title: 'How to Choose the Right Fence?',
    description: 'A comprehensive guide to selecting the perfect fencing solution for your property. Learn about materials, security levels, and design considerations.',
    image: heroFence,
    category: 'Guide',
    readTime: '8 min read',
    date: '2024-01-15',
  },
  {
    slug: 'ppgi-vs-pvc-fencing-which-is-better',
    title: 'PPGI vs PVC Fencing — Which is Better?',
    description: 'Compare PPGI (Pre-Painted Galvanized Iron) and PVC fencing materials. Understand their differences, advantages, and best use cases.',
    image: metalFence,
    category: 'Comparison',
    readTime: '6 min read',
    date: '2024-01-10',
  },
  {
    slug: 'fence-height-rules-in-uae',
    title: 'Fence Height Rules in UAE',
    description: 'Complete guide to fence height regulations in the United Arab Emirates. Learn about legal requirements, permits, and compliance standards.',
    image: heroFence,
    category: 'Regulations',
    readTime: '5 min read',
    date: '2024-01-08',
  },
  {
    slug: 'best-fencing-for-data-centers',
    title: 'Best Fencing for Data Centers',
    description: 'Discover the optimal fencing solutions for data centers and critical IT infrastructure. Security standards, certifications, and best practices.',
    image: metalFence,
    category: 'Industry',
    readTime: '7 min read',
    date: '2024-01-05',
  },
  {
    slug: 'difference-between-358-and-welded-mesh',
    title: 'Difference Between 358 and Welded Mesh',
    description: 'Understand the key differences between 358 prison mesh and welded mesh fencing. Learn which one suits your security requirements better.',
    image: heroFence,
    category: 'Technical',
    readTime: '6 min read',
    date: '2024-01-03',
  },
  {
    slug: 'chain-link-vs-welded-mesh-fence',
    title: 'Chain Link Fence vs Welded Mesh Fence',
    description: 'Compare chain link and welded mesh fencing for UAE and GCC projects, including cost, strength, visibility, applications and RFQ details.',
    image: heroFence,
    category: 'Comparison',
    readTime: '7 min read',
    date: '2024-01-02',
  },
  {
    slug: 'pvc-coated-vs-galvanized-chain-link-fence',
    title: 'PVC Coated vs Galvanized Chain Link Fence',
    description: 'Learn when to choose PVC coated chain link fence or galvanized GI chain link fence for outdoor, coastal, farm and commercial projects.',
    image: metalFence,
    category: 'Comparison',
    readTime: '6 min read',
    date: '2024-01-01',
  },
  {
    slug: 'best-fencing-for-construction-sites-in-dubai',
    title: 'Best Fencing for Construction Sites in Dubai',
    description: 'A buyer guide to temporary fence panels, PVC hoarding, chain link fence and site boundary fencing for Dubai construction projects.',
    image: heroFence,
    category: 'Construction',
    readTime: '7 min read',
    date: '2023-12-29',
  },
  {
    slug: 'warehouse-security-fencing-guide',
    title: 'How to Choose Security Fencing for Warehouses',
    description: 'Warehouse fencing guide covering chain link, welded mesh, anti-climb fence, steel fencing, gates, access control and RFQ details.',
    image: metalFence,
    category: 'Guide',
    readTime: '7 min read',
    date: '2023-12-28',
  },
  {
    slug: 'barbed-wire-vs-razor-wire',
    title: 'Barbed Wire vs Razor Wire',
    description: 'Compare barbed wire and razor wire for farms, industrial boundaries, high-security perimeters and GCC project RFQs.',
    image: heroFence,
    category: 'Comparison',
    readTime: '5 min read',
    date: '2023-12-27',
  },
  {
    slug: 'how-to-prepare-a-fencing-rfq',
    title: 'How to Prepare a Fencing RFQ',
    description: 'A practical RFQ checklist for fencing buyers: length, height, mesh opening, wire diameter, coating, gates, delivery and installation scope.',
    image: metalFence,
    category: 'RFQ',
    readTime: '6 min read',
    date: '2023-12-26',
  },
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
              image: typeof post.image === 'string' ? `https://www.srkfencing.com${post.image}` : undefined,
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
      <HeroBannerSlider slides={UNUSED_BANNERS_SLIDES} altPrefix="Blog banner" />

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Knowledge Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Blog & Knowledge Center
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert insights, guides, and articles to help you make informed decisions about fencing solutions
            </p>
          </div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Articles & Guides</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our expert guides and industry insights
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => {
                const imageSrc = post.image || heroFence;
                return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-hover cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5">
                        <span className="text-xs font-bold uppercase tracking-wide text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
                );
              })}
            </div>
          )}

          <div className="mt-16 rounded-lg border border-border bg-card p-6">
            <div className="mb-6 max-w-3xl">
              <h2 className="text-2xl font-extrabold text-foreground">Buyer Guide Topics</h2>
              <p className="mt-3 text-muted-foreground">
                Use these guides to compare fence types, understand security applications and prepare a clearer RFQ
                before requesting chain link, welded mesh, PVC, temporary, barbed wire or razor wire pricing.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {defaultBlogPosts.slice(5).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-md border border-border p-4 transition hover:border-primary hover:shadow-sm">
                  <h3 className="font-bold text-foreground">{post.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(blogKeywordProfiles[post.slug] || []).slice(0, 4).map((keyword) => (
                      <span key={keyword} className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground">
              Subscribe to our newsletter to receive the latest articles, guides, and industry insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-glow transition-all duration-300 hover:shadow-hover hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      </SiteLayout>
    </>
  );
}
