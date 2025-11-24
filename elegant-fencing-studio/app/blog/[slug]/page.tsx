'use client';

import { useState, useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import heroFence from '@/assets/hero-fence.jpg';
import metalFence from '@/assets/metal-fence.jpg';
import { apiClient } from '@/lib/api';

const blogPostsData: Record<string, {
  title: string;
  description: string;
  image: any;
  category: string;
  readTime: string;
  date: string;
  content: string;
}> = {
  'how-to-choose-the-right-fence': {
    title: 'How to Choose the Right Fence?',
    description: 'A comprehensive guide to selecting the perfect fencing solution for your property.',
    image: heroFence,
    category: 'Guide',
    readTime: '8 min read',
    date: '2024-01-15',
    content: `
      <h2>Introduction</h2>
      <p>Choosing the right fence for your property is a crucial decision that affects security, aesthetics, privacy, and property value. With numerous options available, it's essential to understand your specific needs and the characteristics of different fencing materials.</p>

      <h2>Key Factors to Consider</h2>
      
      <h3>1. Purpose and Security Requirements</h3>
      <p>The primary purpose of your fence will significantly influence your choice. Consider:</p>
      <ul>
        <li><strong>Security Level:</strong> Do you need high-security fencing for critical infrastructure, or is basic perimeter marking sufficient?</li>
        <li><strong>Privacy:</strong> How much privacy do you require? Solid panels provide maximum privacy, while mesh offers visibility.</li>
        <li><strong>Access Control:</strong> Do you need gates, access control systems, or vehicle barriers?</li>
      </ul>

      <h3>2. Material Selection</h3>
      <p>Different materials offer various benefits:</p>
      <ul>
        <li><strong>Steel & Metal:</strong> Durable, high-security, requires maintenance. Ideal for industrial and commercial applications.</li>
        <li><strong>Welded Mesh:</strong> Strong, visible, cost-effective. Great for perimeter security.</li>
        <li><strong>PVC/ECO:</strong> Low maintenance, weather-resistant, aesthetic appeal. Perfect for residential and commercial properties.</li>
        <li><strong>Wire Fencing:</strong> Economical, flexible, easy installation. Suitable for agricultural and basic security needs.</li>
      </ul>

      <h3>3. Budget Considerations</h3>
      <p>Your budget will determine the material and design options available. Consider:</p>
      <ul>
        <li>Initial installation costs</li>
        <li>Long-term maintenance expenses</li>
        <li>Durability and lifespan</li>
        <li>Return on investment (property value increase)</li>
      </ul>

      <h3>4. Local Regulations and Compliance</h3>
      <p>Check local building codes, height restrictions, and permit requirements before installation. Some areas have specific regulations regarding:</p>
      <ul>
        <li>Maximum fence height</li>
        <li>Setback requirements</li>
        <li>Material restrictions</li>
        <li>Design guidelines</li>
      </ul>

      <h3>5. Environmental Factors</h3>
      <p>Consider your local climate and environment:</p>
      <ul>
        <li><strong>Weather Resistance:</strong> Coastal areas may require corrosion-resistant materials</li>
        <li><strong>Wind Load:</strong> High-wind areas need sturdy construction</li>
        <li><strong>Soil Conditions:</strong> Soil type affects foundation requirements</li>
        <li><strong>Sun Exposure:</strong> UV-resistant materials for sunny locations</li>
      </ul>

      <h2>Making Your Decision</h2>
      <p>After considering all factors, consult with fencing professionals who can provide:</p>
      <ul>
        <li>Site assessment and recommendations</li>
        <li>Detailed cost estimates</li>
        <li>Compliance verification</li>
        <li>Installation timeline</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Choosing the right fence requires careful consideration of your specific needs, budget, and local requirements. By evaluating these factors and consulting with experts, you can select a fencing solution that provides optimal security, aesthetics, and value for your property.</p>
    `,
  },
  'ppgi-vs-pvc-fencing-which-is-better': {
    title: 'PPGI vs PVC Fencing — Which is Better?',
    description: 'Compare PPGI and PVC fencing materials to make an informed decision.',
    image: metalFence,
    category: 'Comparison',
    readTime: '6 min read',
    date: '2024-01-10',
    content: `
      <h2>Introduction</h2>
      <p>When choosing fencing materials, two popular options are PPGI (Pre-Painted Galvanized Iron) and PVC. Both offer distinct advantages, and the best choice depends on your specific requirements.</p>

      <h2>What is PPGI Fencing?</h2>
      <p>PPGI fencing uses pre-painted galvanized iron sheets that are coated with protective paint layers. This material offers:</p>
      <ul>
        <li>Excellent corrosion resistance</li>
        <li>High durability and strength</li>
        <li>Long lifespan (20-30 years)</li>
        <li>Weather resistance</li>
        <li>Color customization options</li>
      </ul>

      <h2>What is PVC Fencing?</h2>
      <p>PVC (Polyvinyl Chloride) fencing is made from synthetic plastic material. Key features include:</p>
      <ul>
        <li>Low maintenance requirements</li>
        <li>No rust or corrosion</li>
        <li>Lightweight construction</li>
        <li>Easy installation</li>
        <li>Cost-effective solution</li>
        <li>Various color and design options</li>
      </ul>

      <h2>Comparison Table</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f5f5f5;">
          <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Factor</th>
          <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">PPGI</th>
          <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">PVC</th>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Durability</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">Excellent (20-30 years)</td>
          <td style="padding: 12px; border: 1px solid #ddd;">Good (15-20 years)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Maintenance</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">Moderate</td>
          <td style="padding: 12px; border: 1px solid #ddd;">Minimal</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Cost</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">Higher initial cost</td>
          <td style="padding: 12px; border: 1px solid #ddd;">Lower initial cost</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Strength</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">Very High</td>
          <td style="padding: 12px; border: 1px solid #ddd;">Moderate</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Weather Resistance</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">Excellent</td>
          <td style="padding: 12px; border: 1px solid #ddd;">Excellent</td>
        </tr>
      </table>

      <h2>When to Choose PPGI</h2>
      <ul>
        <li>High-security requirements</li>
        <li>Industrial or commercial applications</li>
        <li>Harsh environmental conditions</li>
        <li>Long-term investment focus</li>
        <li>Maximum durability needs</li>
      </ul>

      <h2>When to Choose PVC</h2>
      <ul>
        <li>Residential properties</li>
        <li>Budget-conscious projects</li>
        <li>Low-maintenance requirements</li>
        <li>Aesthetic-focused applications</li>
        <li>Quick installation needs</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Both PPGI and PVC fencing have their place in the market. PPGI excels in durability and security, while PVC offers cost-effectiveness and low maintenance. Your choice should align with your specific needs, budget, and long-term goals.</p>
    `,
  },
  'fence-height-rules-in-uae': {
    title: 'Fence Height Rules in UAE',
    description: 'Complete guide to fence height regulations in the United Arab Emirates.',
    image: heroFence,
    category: 'Regulations',
    readTime: '5 min read',
    date: '2024-01-08',
    content: `
      <h2>Introduction</h2>
      <p>Understanding fence height regulations in the UAE is crucial for property owners and developers. These rules vary by emirate and property type, and non-compliance can result in fines or required modifications.</p>

      <h2>General UAE Fence Height Regulations</h2>
      <p>While specific regulations vary by emirate, general guidelines include:</p>
      <ul>
        <li>Residential properties: Typically 1.5m to 2.0m maximum</li>
        <li>Commercial properties: Up to 2.4m allowed in most areas</li>
        <li>Industrial properties: Can exceed 2.4m with proper permits</li>
        <li>Setback requirements: Fences must maintain distance from property lines</li>
      </ul>

      <h2>Dubai Regulations</h2>
      <p>In Dubai, fence height regulations are governed by the Dubai Municipality:</p>
      <ul>
        <li><strong>Residential Villas:</strong> Maximum 2.0m height</li>
        <li><strong>Residential Apartments:</strong> Subject to building regulations</li>
        <li><strong>Commercial:</strong> Up to 2.4m with approval</li>
        <li><strong>Industrial:</strong> Higher fences allowed with special permits</li>
      </ul>
      <p>All fence installations require approval from Dubai Municipality before construction begins.</p>

      <h2>Abu Dhabi Regulations</h2>
      <p>Abu Dhabi has specific guidelines through the Department of Municipalities and Transport:</p>
      <ul>
        <li>Residential areas: 1.8m to 2.0m standard</li>
        <li>Commercial zones: Up to 2.4m permitted</li>
        <li>Security installations: May exceed standard heights with justification</li>
        <li>Setback: Minimum 1.5m from property boundary</li>
      </ul>

      <h2>Sharjah and Other Emirates</h2>
      <p>Other emirates follow similar patterns with local variations:</p>
      <ul>
        <li>Sharjah: Generally 2.0m maximum for residential</li>
        <li>Ajman: Similar to Dubai regulations</li>
        <li>Ras Al Khaimah: Flexible based on property type</li>
      </ul>

      <h2>Permit Requirements</h2>
      <p>Before installing any fence in the UAE, you must:</p>
      <ol>
        <li>Obtain necessary permits from local municipality</li>
        <li>Submit detailed plans and specifications</li>
        <li>Pay applicable fees</li>
        <li>Schedule inspections during and after installation</li>
      </ol>

      <h2>Special Considerations</h2>
      <ul>
        <li><strong>Corner Properties:</strong> May have additional restrictions</li>
        <li><strong>Heritage Areas:</strong> Stricter design and height requirements</li>
        <li><strong>Gated Communities:</strong> May have HOA-specific rules</li>
        <li><strong>Security Installations:</strong> Can apply for height exemptions</li>
      </ul>

      <h2>Compliance Tips</h2>
      <ul>
        <li>Always check with local authorities before installation</li>
        <li>Work with licensed contractors familiar with UAE regulations</li>
        <li>Keep all permits and documentation</li>
        <li>Schedule required inspections</li>
        <li>Consider future maintenance and modifications</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Fence height regulations in the UAE are designed to maintain aesthetics, safety, and community standards. Always consult with local authorities and experienced professionals to ensure compliance with all applicable regulations.</p>
    `,
  },
  'best-fencing-for-data-centers': {
    title: 'Best Fencing for Data Centers',
    description: 'Discover optimal fencing solutions for data centers and critical IT infrastructure.',
    image: metalFence,
    category: 'Industry',
    readTime: '7 min read',
    date: '2024-01-05',
    content: `
      <h2>Introduction</h2>
      <p>Data centers house critical IT infrastructure requiring the highest levels of security. Choosing the right fencing solution is essential for protecting sensitive data, equipment, and ensuring business continuity.</p>

      <h2>Security Requirements for Data Centers</h2>
      <p>Data center fencing must meet stringent security standards:</p>
      <ul>
        <li><strong>CPNI Certification:</strong> UK Centre for the Protection of National Infrastructure standards</li>
        <li><strong>LPS1175 Ratings:</strong> Security ratings from A1 to D10</li>
        <li><strong>Anti-Climb Design:</strong> Prevent unauthorized access</li>
        <li><strong>Integrated Monitoring:</strong> CCTV and alarm system compatibility</li>
        <li><strong>Vehicle Barriers:</strong> Protection against vehicle-based attacks</li>
      </ul>

      <h2>Recommended Fencing Systems</h2>
      
      <h3>1. High-Security Mesh Fencing</h3>
      <p>358 Prison Mesh or similar high-security mesh systems offer:</p>
      <ul>
        <li>Maximum security with visibility</li>
        <li>CPNI and LPS1175 certification options</li>
        <li>Anti-climb and anti-cut features</li>
        <li>Integration with surveillance systems</li>
      </ul>

      <h3>2. Woven Mesh Systems</h3>
      <p>Heavy-duty woven mesh provides:</p>
      <ul>
        <li>Superior strength and durability</li>
        <li>Multiple security rating options</li>
        <li>Custom configurations</li>
        <li>Long-term reliability</li>
      </ul>

      <h3>3. Multi-Layer Security</h3>
      <p>For maximum protection, consider:</p>
      <ul>
        <li>Primary perimeter fence (2.4m - 3.6m)</li>
        <li>Secondary inner barrier</li>
        <li>Vehicle barriers at access points</li>
        <li>Integrated access control systems</li>
      </ul>

      <h2>Key Features to Look For</h2>
      <ul>
        <li><strong>Height:</strong> Minimum 2.4m, preferably 3.0m or higher</li>
        <li><strong>Material:</strong> Galvanized steel or specialized alloys</li>
        <li><strong>Foundation:</strong> Deep-set posts for stability</li>
        <li><strong>Gates:</strong> Security-rated gates with access control</li>
        <li><strong>Monitoring:</strong> Integration points for CCTV and sensors</li>
      </ul>

      <h2>Installation Considerations</h2>
      <ul>
        <li>Professional installation by certified contractors</li>
        <li>Compliance with local building codes</li>
        <li>Integration with existing security systems</li>
        <li>Regular maintenance and inspections</li>
        <li>Documentation and certification records</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Conduct security risk assessment</li>
        <li>Choose certified systems (CPNI/LPS1175)</li>
        <li>Implement layered security approach</li>
        <li>Regular security audits</li>
        <li>Maintain comprehensive documentation</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Data center fencing requires specialized solutions that meet international security standards. Investing in certified, high-security fencing systems is essential for protecting critical infrastructure and ensuring compliance with industry regulations.</p>
    `,
  },
  'difference-between-358-and-welded-mesh': {
    title: 'Difference Between 358 and Welded Mesh',
    description: 'Understand the key differences between 358 prison mesh and welded mesh fencing.',
    image: heroFence,
    category: 'Technical',
    readTime: '6 min read',
    date: '2024-01-03',
    content: `
      <h2>Introduction</h2>
      <p>Understanding the differences between 358 mesh and welded mesh is crucial when selecting security fencing. Both serve different purposes and offer distinct advantages.</p>

      <h2>What is 358 Mesh?</h2>
      <p>358 mesh, also known as "prison mesh" or "anti-climb mesh," is a high-security fencing system characterized by:</p>
      <ul>
        <li><strong>Small Apertures:</strong> 76.2mm x 12.7mm (3" x 0.5") openings</li>
        <li><strong>Construction:</strong> Welded at every intersection</li>
        <li><strong>Wire Diameter:</strong> Typically 3.0mm to 3.4mm</li>
        <li><strong>Security Level:</strong> High-security applications</li>
        <li><strong>Certifications:</strong> CPNI and LPS1175 rated options available</li>
      </ul>

      <h2>What is Welded Mesh?</h2>
      <p>Welded mesh is a general-purpose fencing material with:</p>
      <ul>
        <li><strong>Larger Apertures:</strong> Various sizes (50mm x 50mm, 75mm x 75mm, 100mm x 100mm)</li>
        <li><strong>Construction:</strong> Welded at intersections</li>
        <li><strong>Wire Diameter:</strong> Typically 2.5mm to 4.0mm</li>
        <li><strong>Security Level:</strong> Standard to medium security</li>
        <li><strong>Applications:</strong> General perimeter fencing</li>
      </ul>

      <h2>Key Differences</h2>
      
      <h3>1. Aperture Size</h3>
      <ul>
        <li><strong>358 Mesh:</strong> Small 76.2mm x 12.7mm openings prevent climbing</li>
        <li><strong>Welded Mesh:</strong> Larger openings (typically square) allow visibility</li>
      </ul>

      <h3>2. Security Level</h3>
      <ul>
        <li><strong>358 Mesh:</strong> High-security, anti-climb design</li>
        <li><strong>Welded Mesh:</strong> Standard security, visible barrier</li>
      </ul>

      <h3>3. Applications</h3>
      <ul>
        <li><strong>358 Mesh:</strong> Prisons, data centers, critical infrastructure, high-security facilities</li>
        <li><strong>Welded Mesh:</strong> Residential, commercial, industrial, schools, parks</li>
      </ul>

      <h3>4. Cost</h3>
      <ul>
        <li><strong>358 Mesh:</strong> Higher cost due to specialized manufacturing</li>
        <li><strong>Welded Mesh:</strong> More economical, mass-produced</li>
      </ul>

      <h3>5. Visibility</h3>
      <ul>
        <li><strong>358 Mesh:</strong> Reduced visibility due to small apertures</li>
        <li><strong>Welded Mesh:</strong> Good visibility through larger openings</li>
      </ul>

      <h2>Comparison Table</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f5f5f5;">
          <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Feature</th>
          <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">358 Mesh</th>
          <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Welded Mesh</th>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Aperture Size</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">76.2mm x 12.7mm</td>
          <td style="padding: 12px; border: 1px solid #ddd;">50mm-100mm square</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Security Level</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">High</td>
          <td style="padding: 12px; border: 1px solid #ddd;">Standard</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Anti-Climb</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">Yes</td>
          <td style="padding: 12px; border: 1px solid #ddd;">Limited</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Cost</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">Higher</td>
          <td style="padding: 12px; border: 1px solid #ddd;">Lower</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;"><strong>Visibility</strong></td>
          <td style="padding: 12px; border: 1px solid #ddd;">Reduced</td>
          <td style="padding: 12px; border: 1px solid #ddd;">Good</td>
        </tr>
      </table>

      <h2>When to Choose 358 Mesh</h2>
      <ul>
        <li>High-security requirements</li>
        <li>Critical infrastructure protection</li>
        <li>Anti-climb needs</li>
        <li>CPNI/LPS1175 certification required</li>
        <li>Maximum security installations</li>
      </ul>

      <h2>When to Choose Welded Mesh</h2>
      <ul>
        <li>Standard security needs</li>
        <li>Budget-conscious projects</li>
        <li>Good visibility required</li>
        <li>General perimeter fencing</li>
        <li>Residential and commercial applications</li>
      </ul>

      <h2>Conclusion</h2>
      <p>358 mesh and welded mesh serve different security needs. 358 mesh is ideal for high-security applications requiring anti-climb protection, while welded mesh suits standard perimeter fencing needs. Your choice should align with your security requirements and budget.</p>
    `,
  },
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string>('');

  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
      loadBlogPost(resolvedParams.slug);
    };
    loadParams();
  }, [params]);

  const loadBlogPost = async (postSlug: string) => {
    try {
      setLoading(true);
      const response = await apiClient.getBlogPosts();
      const found = (response.blogPosts || []).find((p: any) => p.slug === postSlug && p.status === 'Published');
      
      if (!found) {
        // Fallback to static data
        const staticPost = blogPostsData[postSlug];
        setPost(staticPost || null);
      } else {
        // Use API data, but fallback to static image if needed
        const imageSrc = found.image || (blogPostsData[postSlug]?.image || heroFence);
        setPost({
          ...found,
          image: imageSrc,
        });
      }
    } catch (error) {
      console.error('Error loading blog post:', error);
      // Fallback to static data
      const staticPost = blogPostsData[postSlug];
      setPost(staticPost || null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        </div>
      </SiteLayout>
    );
  }

  if (!post) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-primary hover:underline">
            View All Blog Posts
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Blog"
        title={post.title}
        description={post.description}
        variant="contrast"
        backgroundImage={post.image}
        overlayClassName="from-black/85 via-black/75 to-black/60"
      />

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1">
                <span className="text-xs font-bold uppercase tracking-wide text-primary">
                  {post.category}
                </span>
              </div>
            </div>
          </div>

          <Card className="border border-border bg-background">
            <CardContent className="p-8 md:p-12">
              <article
                className="[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:leading-tight
                           [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:leading-snug
                           [&_p]:text-lg [&_p]:text-muted-foreground [&_p]:mb-5 [&_p]:leading-relaxed
                           [&_ul]:my-5 [&_ul]:pl-7 [&_ul]:list-disc [&_ul]:text-muted-foreground
                           [&_ol]:my-5 [&_ol]:pl-7 [&_ol]:list-decimal [&_ol]:text-muted-foreground
                           [&_li]:mb-2 [&_li]:leading-relaxed
                           [&_strong]:text-foreground [&_strong]:font-semibold
                           [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse
                           [&_table_th]:p-3 [&_table_th]:border [&_table_th]:border-border [&_table_th]:bg-muted [&_table_th]:text-foreground [&_table_th]:font-semibold [&_table_th]:text-left
                           [&_table_td]:p-3 [&_table_td]:border [&_table_td]:border-border [&_table_td]:text-muted-foreground
                           [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          <div className="mt-12 flex items-center justify-between pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Articles
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.description,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Need Help Choosing the Right Fence?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our expert team can help you select the perfect fencing solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <Link href="/products">
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

