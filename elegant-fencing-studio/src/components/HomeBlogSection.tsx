import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const homeBlogPosts = [
  {
    slug: 'fencing-supplier-abu-dhabi-guide',
    title: 'Planning a Fencing Project in Abu Dhabi',
    description: 'How to choose the right supplier, fencing system and quotation details for Abu Dhabi projects.',
    image: '/blog/fencing-supplier-abu-dhabi-guide.webp',
    category: 'Project Guide',
    readTime: '13 min read',
    date: '2026-08-21',
  },
  {
    slug: 'how-to-compare-fencing-suppliers-uae',
    title: 'How to Compare Fencing Suppliers in the UAE',
    description: 'A practical procurement guide for comparing specifications, quotations and installation support.',
    image: '/blog/how-to-compare-fencing-suppliers-uae.webp',
    category: 'Procurement Guide',
    readTime: '14 min read',
    date: '2026-08-20',
  },
  {
    slug: 'chain-link-fencing-dubai-buyer-guide',
    title: 'Choosing Chain Link Fencing in Dubai',
    description: 'Mesh size, wire diameter, coating, posts, gates and other details to check before ordering.',
    image: '/blog/chain-link-fencing-dubai-buyer-guide.webp',
    category: 'Specification Guide',
    readTime: '13 min read',
    date: '2026-08-19',
  },
];

export default function HomeBlogSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Project Guides</span>
          </div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Latest Fencing Blog Posts</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
            Helpful buying guides for cost planning, supplier comparison and fence specifications.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {homeBlogPosts.map((post) => (
            <article key={post.slug} className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-hover">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[1200/628] w-full overflow-hidden bg-white">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain object-center bg-white transition-transform duration-500 group-hover:scale-[1.01]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">{post.category}</div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-extrabold leading-tight text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{post.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center text-sm font-bold text-primary hover:underline">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-xl bg-primary px-8 font-bold text-white hover:bg-primary/90">
            <Link href="/blog">
              View All Blog Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
