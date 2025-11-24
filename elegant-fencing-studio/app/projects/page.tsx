'use client';

import { useState, useEffect, useMemo } from 'react';
import SiteLayout from '@/components/SiteLayout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Building2, MapPin, Calendar, CheckCircle2, Star, Quote, Loader2 } from 'lucide-react';
import heroFence from '@/assets/hero-fence.jpg';
import metalFence from '@/assets/metal-fence.jpg';
import vinylFence from '@/assets/vinyl-fence.jpg';
import woodFence from '@/assets/wood-fence.jpg';
import { apiClient } from '@/lib/api';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Sample projects data
const completedProjects = [
  {
    id: 1,
    title: 'High Security Data Center',
    location: 'Mumbai, Maharashtra',
    category: 'Data Centers',
    year: '2024',
    description: 'Comprehensive security fencing solution for a major data center facility, featuring CPNI certified systems and integrated monitoring.',
    images: [heroFence, metalFence, vinylFence],
    beforeImage: woodFence,
    afterImage: heroFence,
    videoUrl: null,
    client: 'TechCorp Data Solutions',
    testimonial: 'SRK FENCE delivered exceptional security fencing that exceeded our expectations. The installation was professional and completed on time.',
  },
  {
    id: 2,
    title: 'Residential Gated Community',
    location: 'Bangalore, Karnataka',
    category: 'Residential',
    year: '2024',
    description: 'Elegant perimeter fencing for a premium residential community, combining security with aesthetic appeal.',
    images: [metalFence, vinylFence],
    beforeImage: woodFence,
    afterImage: metalFence,
    videoUrl: null,
    client: 'Prestige Developers',
    testimonial: 'The fencing solution perfectly matches our community\'s premium aesthetic while providing excellent security.',
  },
  {
    id: 3,
    title: 'Industrial Warehouse Complex',
    location: 'Delhi, NCR',
    category: 'Commercial & Industrial',
    year: '2023',
    description: 'Large-scale perimeter security fencing for industrial warehouse complex with vehicle access control.',
    images: [heroFence, metalFence],
    beforeImage: woodFence,
    afterImage: heroFence,
    videoUrl: null,
    client: 'LogiTech Industries',
    testimonial: 'Professional installation and high-quality materials. Our warehouse security has been significantly enhanced.',
  },
  {
    id: 4,
    title: 'School Campus Perimeter',
    location: 'Pune, Maharashtra',
    category: 'Schools & Public Parks',
    year: '2024',
    description: 'Child-safe fencing system for educational institution with high visibility and compliance standards.',
    images: [vinylFence, metalFence],
    beforeImage: woodFence,
    afterImage: vinylFence,
    videoUrl: null,
    client: 'Bright Future Academy',
    testimonial: 'The safety-focused design gives us peace of mind while maintaining an open, welcoming environment.',
  },
  {
    id: 5,
    title: 'Oil Refinery Security Perimeter',
    location: 'Gujarat',
    category: 'Oil & Gas Sector',
    year: '2023',
    description: 'Specialized corrosion-resistant fencing for oil refinery with high security and safety compliance.',
    images: [heroFence, metalFence],
    beforeImage: woodFence,
    afterImage: heroFence,
    videoUrl: null,
    client: 'Energy Solutions Ltd.',
    testimonial: 'Excellent understanding of our industry requirements. The fencing system meets all safety standards.',
  },
  {
    id: 6,
    title: 'Commercial Office Park',
    location: 'Hyderabad, Telangana',
    category: 'Commercial & Industrial',
    year: '2024',
    description: 'Modern fencing solution for corporate office park with integrated access control and aesthetic design.',
    images: [metalFence, vinylFence],
    beforeImage: woodFence,
    afterImage: metalFence,
    videoUrl: null,
    client: 'Corporate Hub Developers',
    testimonial: 'The professional installation and quality materials have enhanced our property value significantly.',
  },
];

// Client testimonials
const clientTestimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'Facility Manager',
    company: 'TechCorp Data Solutions',
    rating: 5,
    text: 'SRK FENCE delivered exceptional security fencing that exceeded our expectations. The installation was professional and completed on time.',
    project: 'High Security Data Center',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Project Director',
    company: 'Prestige Developers',
    rating: 5,
    text: 'The fencing solution perfectly matches our community\'s premium aesthetic while providing excellent security. Highly recommended!',
    project: 'Residential Gated Community',
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Operations Manager',
    company: 'LogiTech Industries',
    rating: 5,
    text: 'Professional installation and high-quality materials. Our warehouse security has been significantly enhanced.',
    project: 'Industrial Warehouse Complex',
  },
  {
    id: 4,
    name: 'Dr. Sunita Reddy',
    position: 'Principal',
    company: 'Bright Future Academy',
    rating: 5,
    text: 'The safety-focused design gives us peace of mind while maintaining an open, welcoming environment for our students.',
    project: 'School Campus Perimeter',
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('gallery');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getProjects();
      const publishedProjects = (response.projects || []).filter((p: any) => p.status === 'Published');
      setProjects(publishedProjects.length > 0 ? publishedProjects : completedProjects);
      
      // Load testimonials from projects
      const projectTestimonials = publishedProjects
        .filter((p: any) => p.testimonial && p.client)
        .map((p: any, idx: number) => ({
          id: idx + 1,
          clientName: p.client,
          clientTitle: 'Client',
          quote: p.testimonial,
          rating: 5,
          project: p.title,
        }));
      setTestimonials(projectTestimonials.length > 0 ? projectTestimonials : clientTestimonials);
    } catch (error) {
      console.error('Error loading projects:', error);
      setProjects(completedProjects);
      setTestimonials(clientTestimonials);
    } finally {
      setLoading(false);
    }
  };

  const beforeAfterImages = useMemo(() => {
    return projects
      .filter((p: any) => p.beforeImage && p.afterImage)
      .map((p: any) => ({
        title: p.title,
        description: p.description || `${p.location} - ${p.category}`,
        before: p.beforeImage,
        after: p.afterImage,
      }));
  }, [projects]);

  if (loading) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Projects"
        title="Completed Projects Gallery"
        description="Explore our portfolio of successful fencing projects across various sectors, showcasing our expertise and commitment to excellence."
        variant="contrast"
        backgroundImage={heroFence}
        overlayClassName="from-black/85 via-black/75 to-black/60"
      />

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="gallery">Projects Gallery</TabsTrigger>
              <TabsTrigger value="before-after">Before/After</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>

            {/* Projects Gallery Tab */}
            <TabsContent value="gallery" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => {
                  const projectImages = project.images && project.images.length > 0 ? project.images : [heroFence];
                  return (
                  <Card
                    key={project.id}
                    className="group overflow-hidden border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-hover cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      {typeof projectImages[0] === 'string' && projectImages[0].startsWith('http') ? (
                        <img
                          src={projectImages[0]}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <Image
                          src={projectImages[0]}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5">
                          <Building2 className="h-4 w-4 text-white" />
                          <span className="text-xs font-bold uppercase tracking-wide text-white">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/90">
                          <MapPin className="h-3 w-3" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{project.year}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary">
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Before/After Tab */}
            <TabsContent value="before-after" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Transformation Showcase</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  See the remarkable transformations we've achieved for our clients
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {beforeAfterImages.length > 0 ? (
                  beforeAfterImages.map((item, idx) => (
                    <Card key={idx} className="overflow-hidden border border-border">
                      <CardHeader>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="relative h-48 rounded-lg overflow-hidden mb-2">
                              {typeof item.before === 'string' && item.before.startsWith('http') ? (
                                <img
                                  src={item.before}
                                  alt="Before"
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <Image
                                  src={item.before}
                                  alt="Before"
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                              )}
                            </div>
                            <p className="text-sm font-semibold text-muted-foreground text-center">Before</p>
                          </div>
                          <div>
                            <div className="relative h-48 rounded-lg overflow-hidden mb-2">
                              {typeof item.after === 'string' && item.after.startsWith('http') ? (
                                <img
                                  src={item.after}
                                  alt="After"
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <Image
                                  src={item.after}
                                  alt="After"
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                              )}
                            </div>
                            <p className="text-sm font-semibold text-primary text-center">After</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12 text-muted-foreground">
                    No before/after images available yet.
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Project Videos</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Watch our projects come to life through video showcases
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {completedProjects.filter(p => p.videoUrl).length === 0 ? (
                  <div className="col-span-full text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                      <Play className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Videos Coming Soon</h3>
                    <p className="text-muted-foreground">
                      We're working on adding video showcases of our projects. Check back soon!
                    </p>
                  </div>
                ) : (
                  completedProjects
                    .filter(p => p.videoUrl)
                    .map((project) => (
                      <Card key={project.id} className="overflow-hidden border border-border">
                        <div className="relative aspect-video">
                          {/* Video placeholder - replace with actual video embed */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <Play className="w-16 h-16 text-white" />
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.location}</p>
                        </CardContent>
                      </Card>
                    ))
                )}
              </div>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Client Testimonials</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hear from our satisfied clients about their experience with SRK FENCE
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <CardTitle className="text-lg mb-1">{testimonial.name}</CardTitle>
                          <CardDescription>
                            {testimonial.position}, {testimonial.company}
                          </CardDescription>
                        </div>
                        <Quote className="w-8 h-8 text-primary/20" />
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Project: {testimonial.project}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.05)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let us help you create a secure and beautiful fencing solution for your property. Contact us today for a consultation.
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

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.year}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <Building2 className="w-4 h-4" />
                      {selectedProject.category}
                    </span>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Project Images</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedImage(typeof image === 'string' ? image : image.src || '')}
                      >
                        {typeof image === 'string' && image.startsWith('http') ? (
                          <img
                            src={image}
                            alt={`${selectedProject.title} - Image ${idx + 1}`}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        ) : (
                          <Image
                            src={image}
                            alt={`${selectedProject.title} - Image ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {selectedProject.testimonial && (
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Quote className="w-5 h-5 text-primary" />
                      Client Testimonial
                    </h4>
                    <p className="text-muted-foreground italic">"{selectedProject.testimonial}"</p>
                    <p className="text-sm text-muted-foreground mt-2">— {selectedProject.client}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl">
          {selectedImage && (
            <div className="relative aspect-video w-full">
              {selectedImage.startsWith('http') ? (
                <img
                  src={selectedImage}
                  alt="Project image"
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <Image
                  src={selectedImage}
                  alt="Project image"
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}

