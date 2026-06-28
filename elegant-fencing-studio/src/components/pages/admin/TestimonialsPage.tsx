'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, Edit, Trash2, Star, Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { apiClient } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const TestimonialsPage = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: "",
    rating: 5,
    metaTitle: "",
    metaDescription: "",
    focusKeywords: "",
    metaKeywords: "",
    canonicalUrl: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    twitterCard: "summary_large_image" as "summary" | "summary_large_image",
    twitterTitle: "",
    twitterDescription: "",
    twitterImage: "",
    robotsMeta: "index, follow" as string,
    status: "Draft" as "Published" | "Draft",
  });

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getTestimonials();
      setTestimonials(response.testimonials || []);
    } catch (error) {
      console.error('Error loading testimonials:', error);
      toast({
        title: "Error",
        description: "Failed to load testimonials",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (testimonial?: any) => {
    if (testimonial) {
      setSelectedTestimonial(testimonial);
      setFormData({
        name: testimonial.name || "",
        role: testimonial.role || "",
        quote: testimonial.quote || "",
        rating: testimonial.rating || 5,
        metaTitle: testimonial.metaTitle || "",
        metaDescription: testimonial.metaDescription || "",
        focusKeywords: testimonial.focusKeywords || "",
        metaKeywords: testimonial.metaKeywords || "",
        canonicalUrl: testimonial.canonicalUrl || "",
        ogTitle: testimonial.ogTitle || "",
        ogDescription: testimonial.ogDescription || "",
        ogImage: testimonial.ogImage || "",
        twitterCard: testimonial.twitterCard || "summary_large_image",
        twitterTitle: testimonial.twitterTitle || "",
        twitterDescription: testimonial.twitterDescription || "",
        twitterImage: testimonial.twitterImage || "",
        robotsMeta: testimonial.robotsMeta || "index, follow",
        status: testimonial.status || "Draft",
      });
    } else {
      setSelectedTestimonial(null);
      setFormData({
        name: "",
        role: "",
        quote: "",
        rating: 5,
        metaTitle: "",
        metaDescription: "",
        focusKeywords: "",
        metaKeywords: "",
        canonicalUrl: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: "",
        twitterCard: "summary_large_image",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: "",
        robotsMeta: "index, follow",
        status: "Draft",
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
    setFormData({
      name: "",
      role: "",
      quote: "",
      rating: 5,
      metaTitle: "",
      metaDescription: "",
      focusKeywords: "",
      metaKeywords: "",
      canonicalUrl: "",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      twitterCard: "summary_large_image",
      twitterTitle: "",
      twitterDescription: "",
      twitterImage: "",
      robotsMeta: "index, follow",
      status: "Draft",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.role || !formData.quote) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setSubmitting(true);
      
      if (selectedTestimonial) {
        // Update existing testimonial
        await apiClient.updateTestimonial(selectedTestimonial.id, {
          ...formData,
          rating: Number(formData.rating),
          metaTitle: formData.metaTitle || undefined,
          metaDescription: formData.metaDescription || undefined,
          focusKeywords: formData.focusKeywords || undefined,
          metaKeywords: formData.metaKeywords || undefined,
          canonicalUrl: formData.canonicalUrl || undefined,
          ogTitle: formData.ogTitle || undefined,
          ogDescription: formData.ogDescription || undefined,
          ogImage: formData.ogImage || undefined,
          twitterCard: formData.twitterCard,
          twitterTitle: formData.twitterTitle || undefined,
          twitterDescription: formData.twitterDescription || undefined,
          twitterImage: formData.twitterImage || undefined,
          robotsMeta: formData.robotsMeta || undefined,
        });
        toast({
          title: "Success",
          description: "Testimonial updated successfully",
        });
      } else {
        // Create new testimonial
        await apiClient.createTestimonial({
          ...formData,
          rating: Number(formData.rating),
          metaTitle: formData.metaTitle || undefined,
          metaDescription: formData.metaDescription || undefined,
          focusKeywords: formData.focusKeywords || undefined,
          metaKeywords: formData.metaKeywords || undefined,
          canonicalUrl: formData.canonicalUrl || undefined,
          ogTitle: formData.ogTitle || undefined,
          ogDescription: formData.ogDescription || undefined,
          ogImage: formData.ogImage || undefined,
          twitterCard: formData.twitterCard,
          twitterTitle: formData.twitterTitle || undefined,
          twitterDescription: formData.twitterDescription || undefined,
          twitterImage: formData.twitterImage || undefined,
          robotsMeta: formData.robotsMeta || undefined,
        });
        toast({
          title: "Success",
          description: "Testimonial created successfully",
        });
      }
      
      handleCloseModal();
      loadTestimonials();
    } catch (error: any) {
      console.error('Error saving testimonial:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save testimonial",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }

    try {
      await apiClient.deleteTestimonial(id);
      toast({
        title: "Success",
        description: "Testimonial deleted successfully",
      });
      loadTestimonials();
    } catch (error: any) {
      console.error('Error deleting testimonial:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete testimonial",
        variant: "destructive",
      });
    }
  };

  const filteredTestimonials = testimonials.filter((testimonial) =>
    testimonial.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    testimonial.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    testimonial.quote?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground">Testimonials</h1>
          <p className="text-muted-foreground mt-2">Manage customer testimonials</p>
        </div>
        <Button 
          onClick={() => handleOpenModal()}
          className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Testimonial
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Testimonial List</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search testimonials..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : filteredTestimonials.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No testimonials found
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Quote</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTestimonials.map((testimonial) => (
                  <TableRow key={testimonial.id}>
                    <TableCell className="font-medium">{testimonial.name}</TableCell>
                    <TableCell>{testimonial.role}</TableCell>
                    <TableCell className="max-w-md truncate">{testimonial.quote}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          testimonial.status === "Published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {testimonial.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleOpenModal(testimonial)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleDelete(testimonial.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Add/Edit Testimonial Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedTestimonial ? "Edit Testimonial" : "Add New Testimonial"}
            </DialogTitle>
            <DialogDescription>
              {selectedTestimonial 
                ? "Update the testimonial information below."
                : "Fill in the details to add a new customer testimonial."
              }
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Customer name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role *</Label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Customer role/position"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote">Quote *</Label>
              <Textarea
                id="quote"
                name="quote"
                value={formData.quote}
                onChange={handleInputChange}
                placeholder="Customer testimonial quote"
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating">Rating</Label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => handleRatingChange(rating)}
                    className={`transition-colors ${
                      formData.rating >= rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    <Star
                      className={`h-6 w-6 ${
                        formData.rating >= rating ? "fill-yellow-400" : "fill-none"
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {formData.rating} out of 5
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleSelectChange("status", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Published">Published</SelectItem>
                  <SelectItem value="Draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6 border-t pt-6">
              <h4 className="text-lg font-semibold text-foreground border-b pb-2">SEO & Ranking Optimization</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleInputChange}
                    placeholder="Enter meta title for SEO"
                    maxLength={60}
                  />
                  <p className="text-xs text-muted-foreground">
                    Recommended: 50-60 characters. Used for search engine results.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="focusKeywords">Focus Keywords</Label>
                  <Input
                    id="focusKeywords"
                    name="focusKeywords"
                    value={formData.focusKeywords}
                    onChange={handleInputChange}
                    placeholder="e.g., customer reviews, testimonials"
                  />
                  <p className="text-xs text-muted-foreground">
                    Primary keywords for ranking. Separate with commas.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  placeholder="Enter meta description for SEO"
                  rows={3}
                  maxLength={160}
                />
                <p className="text-xs text-muted-foreground">
                  Recommended: 150-160 characters. Used for search engine results.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaKeywords">Meta Keywords</Label>
                <Input
                  id="metaKeywords"
                  name="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={handleInputChange}
                  placeholder="keyword1, keyword2, keyword3"
                />
                <p className="text-xs text-muted-foreground">
                  Additional keywords. Separate with commas (optional).
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="canonicalUrl">Canonical URL</Label>
                <Input
                  id="canonicalUrl"
                  name="canonicalUrl"
                  value={formData.canonicalUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/testimonial-page"
                />
                <p className="text-xs text-muted-foreground">
                  Preferred URL to avoid duplicate content issues. Leave empty to use default.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="robotsMeta">Robots Meta Tag</Label>
                <Select
                  value={formData.robotsMeta}
                  onValueChange={(value) => setFormData({ ...formData, robotsMeta: value })}
                >
                  <SelectTrigger id="robotsMeta">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="index, follow">Index, Follow (Recommended)</SelectItem>
                    <SelectItem value="index, nofollow">Index, NoFollow</SelectItem>
                    <SelectItem value="noindex, follow">NoIndex, Follow</SelectItem>
                    <SelectItem value="noindex, nofollow">NoIndex, NoFollow</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Controls search engine crawling and indexing.
                </p>
              </div>

              <div className="border-t pt-4">
                <h5 className="text-md font-semibold text-foreground mb-4">Open Graph (Social Media Sharing)</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ogTitle">OG Title</Label>
                    <Input
                      id="ogTitle"
                      name="ogTitle"
                      value={formData.ogTitle}
                      onChange={handleInputChange}
                      placeholder="Title for Facebook/LinkedIn shares"
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave empty to use meta title.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ogImage">OG Image URL</Label>
                    <Input
                      id="ogImage"
                      name="ogImage"
                      value={formData.ogImage}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                    />
                    <p className="text-xs text-muted-foreground">
                      Recommended: 1200x630px. Leave empty to use default image.
                    </p>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="ogDescription">OG Description</Label>
                  <Textarea
                    id="ogDescription"
                    name="ogDescription"
                    value={formData.ogDescription}
                    onChange={handleInputChange}
                    placeholder="Description for Facebook/LinkedIn shares"
                    rows={2}
                  />
                  <p className="text-xs text-muted-foreground">
                    Leave empty to use meta description.
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h5 className="text-md font-semibold text-foreground mb-4">Twitter Card</h5>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="twitterCard">Twitter Card Type</Label>
                    <Select
                      value={formData.twitterCard}
                      onValueChange={(value: "summary" | "summary_large_image") => setFormData({ ...formData, twitterCard: value })}
                    >
                      <SelectTrigger id="twitterCard">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="summary">Summary (Small Image)</SelectItem>
                        <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="twitterTitle">Twitter Title</Label>
                      <Input
                        id="twitterTitle"
                        name="twitterTitle"
                        value={formData.twitterTitle}
                        onChange={handleInputChange}
                        placeholder="Title for Twitter shares"
                      />
                      <p className="text-xs text-muted-foreground">
                        Leave empty to use meta title.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitterImage">Twitter Image URL</Label>
                      <Input
                        id="twitterImage"
                        name="twitterImage"
                        value={formData.twitterImage}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                      />
                      <p className="text-xs text-muted-foreground">
                        Recommended: 1200x675px. Leave empty to use OG image.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitterDescription">Twitter Description</Label>
                    <Textarea
                      id="twitterDescription"
                      name="twitterDescription"
                      value={formData.twitterDescription}
                      onChange={handleInputChange}
                      placeholder="Description for Twitter shares"
                      rows={2}
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave empty to use meta description.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCloseModal}
                disabled={submitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {selectedTestimonial ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  selectedTestimonial ? "Update Testimonial" : "Create Testimonial"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestimonialsPage;
