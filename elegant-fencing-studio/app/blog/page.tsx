'use client';

import { useState, useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, BookOpen, Loader2 } from 'lucide-react';
import Image from 'next/image';
import heroFence from '@/assets/hero-fence.jpg';
import metalFence from '@/assets/metal-fence.jpg';
import { apiClient } from '@/lib/api';

const defaultBlogPosts = [
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
      setBlogPosts(publishedPosts.length > 0 ? publishedPosts : defaultBlogPosts);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      setBlogPosts(defaultBlogPosts);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Knowledge Center"
        title="Blog & Knowledge Center"
        description="Expert insights, guides, and articles to help you make informed decisions about fencing solutions"
        variant="contrast"
        backgroundImage={heroFence}
        overlayClassName="from-black/85 via-black/75 to-black/60"
      />

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
                    {typeof imageSrc === 'string' && imageSrc.startsWith('http') ? (
                      <img
                        src={imageSrc}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <Image
                        src={imageSrc}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
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
  );
}

