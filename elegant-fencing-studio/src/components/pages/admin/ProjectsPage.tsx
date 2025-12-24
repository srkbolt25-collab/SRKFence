'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, Edit, Trash2, X, Loader2, Upload } from "lucide-react";
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

const ProjectsPage = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    category: "",
    year: "",
    description: "",
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
    images: [] as string[],
    beforeImage: "",
    afterImage: "",
    videoUrl: "",
    client: "",
    testimonial: "",
    status: "Published" as "Published" | "Draft",
  });
  const [newImage, setNewImage] = useState("");
  const [uploadingImages, setUploadingImages] = useState(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getProjects();
      setProjects(response.projects || []);
    } catch (error) {
      console.error('Error loading projects:', error);
      toast({
        title: "Error",
        description: "Failed to load projects",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (project?: any) => {
    if (project) {
      setSelectedProject(project);
      setFormData({
        title: project.title || "",
        location: project.location || "",
        category: project.category || "",
        year: project.year || "",
        description: project.description || "",
        metaTitle: project.metaTitle || "",
        metaDescription: project.metaDescription || "",
        focusKeywords: project.focusKeywords || "",
        metaKeywords: project.metaKeywords || "",
        canonicalUrl: project.canonicalUrl || "",
        ogTitle: project.ogTitle || "",
        ogDescription: project.ogDescription || "",
        ogImage: project.ogImage || "",
        twitterCard: project.twitterCard || "summary_large_image",
        twitterTitle: project.twitterTitle || "",
        twitterDescription: project.twitterDescription || "",
        twitterImage: project.twitterImage || "",
        robotsMeta: project.robotsMeta || "index, follow",
        images: project.images || [],
        beforeImage: project.beforeImage || "",
        afterImage: project.afterImage || "",
        videoUrl: project.videoUrl || "",
        client: project.client || "",
        testimonial: project.testimonial || "",
        status: project.status || "Published",
      });
    } else {
      setSelectedProject(null);
      setFormData({
        title: "",
        location: "",
        category: "",
        year: "",
        description: "",
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
        images: [],
        beforeImage: "",
        afterImage: "",
        videoUrl: "",
        client: "",
        testimonial: "",
        status: "Published",
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddImage = () => {
    if (newImage.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, newImage.trim()],
      });
      setNewImage("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      setUploadingImages(true);
      const fileArray = Array.from(files);
      const response = await apiClient.uploadImages(fileArray, 'projects');
      
      if (response.images && response.images.length > 0) {
        const imageUrls = response.images.map((img: any) => img.url).filter(Boolean);
        if (imageUrls.length > 0) {
          setFormData({
            ...formData,
            images: [...formData.images, ...imageUrls],
          });
          toast({
            title: "Success",
            description: `${imageUrls.length} image(s) uploaded successfully`,
          });
        }
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to upload images",
        variant: "destructive",
      });
    } finally {
      setUploadingImages(false);
      // Reset file input
      e.target.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Clean up empty strings - convert to undefined for truly optional fields
      const cleanedData = {
        ...formData,
        title: formData.title.trim() || undefined,
        location: formData.location.trim() || undefined,
        category: formData.category.trim() || undefined,
        year: formData.year.trim() || undefined,
        description: formData.description.trim() || undefined,
        metaTitle: formData.metaTitle.trim() || undefined,
        metaDescription: formData.metaDescription.trim() || undefined,
        focusKeywords: formData.focusKeywords.trim() || undefined,
        metaKeywords: formData.metaKeywords.trim() || undefined,
        canonicalUrl: formData.canonicalUrl.trim() || undefined,
        ogTitle: formData.ogTitle.trim() || undefined,
        ogDescription: formData.ogDescription.trim() || undefined,
        ogImage: formData.ogImage.trim() || undefined,
        twitterCard: formData.twitterCard,
        twitterTitle: formData.twitterTitle.trim() || undefined,
        twitterDescription: formData.twitterDescription.trim() || undefined,
        twitterImage: formData.twitterImage.trim() || undefined,
        robotsMeta: formData.robotsMeta || undefined,
        beforeImage: formData.beforeImage.trim() || undefined,
        afterImage: formData.afterImage.trim() || undefined,
        videoUrl: formData.videoUrl.trim() || undefined,
        client: formData.client.trim() || undefined,
        testimonial: formData.testimonial.trim() || undefined,
        // Keep arrays as-is (empty arrays are valid)
        images: formData.images,
      };

      if (selectedProject) {
        await apiClient.updateProject(selectedProject.id, cleanedData);
        toast({
          title: "Success",
          description: "Project updated successfully",
        });
      } else {
        await apiClient.createProject(cleanedData);
        toast({
          title: "Success",
          description: "Project created successfully",
        });
      }

      await loadProjects();
      handleCloseModal();
    } catch (error: any) {
      console.error('Error saving project:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save project",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) {
      return;
    }

    try {
      await apiClient.deleteProject(id);
      toast({
        title: "Success",
        description: "Project deleted successfully",
      });
      await loadProjects();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete project",
        variant: "destructive",
      });
    }
  };

  const filteredProjects = projects.filter((project) =>
    project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-2">Manage completed projects</p>
        </div>
        <Button 
          onClick={() => handleOpenModal()}
          className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Project List</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                  </TableCell>
                </TableRow>
              ) : filteredProjects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No projects found
                  </TableCell>
                </TableRow>
              ) : (
                filteredProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{project.location}</TableCell>
                    <TableCell>{project.category}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.status === "Published" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleOpenModal(project)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(project.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedProject ? "Edit Project" : "Add New Project"}
            </DialogTitle>
            <DialogDescription>
              {selectedProject 
                ? "Update project information" 
                : "Fill in the project details"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title (optional)</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Project title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status (optional)</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value as "Published" | "Draft" })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Published">Published</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location (optional)</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Project location"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category (optional)</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="e.g., Data Centers, Residential"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year (optional)</Label>
                <Input
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="e.g., 2024"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client">Client (optional)</Label>
                <Input
                  id="client"
                  name="client"
                  value={formData.client}
                  onChange={handleInputChange}
                  placeholder="Client name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (optional)</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Project description"
                rows={4}
              />
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
                    placeholder="e.g., fencing projects, security installations"
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
                  placeholder="https://example.com/project-page"
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
                      Recommended: 1200x630px. Leave empty to use project image.
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

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="beforeImage">Before Image URL (optional)</Label>
                <Input
                  id="beforeImage"
                  name="beforeImage"
                  value={formData.beforeImage}
                  onChange={handleInputChange}
                  placeholder="Before image URL"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="afterImage">After Image URL (optional)</Label>
                <Input
                  id="afterImage"
                  name="afterImage"
                  value={formData.afterImage}
                  onChange={handleInputChange}
                  placeholder="After image URL"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="videoUrl">Video URL (optional)</Label>
              <Input
                id="videoUrl"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleInputChange}
                placeholder="Video URL"
              />
            </div>

            <div className="space-y-2">
              <Label>Project Images (optional)</Label>
              <div className="space-y-4">
                {/* Image URL Input */}
                <div className="flex gap-2">
                  <Input
                    value={newImage}
                    onChange={(e) => setNewImage(e.target.value)}
                    placeholder="Add image URL"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddImage();
                      }
                    }}
                  />
                  <Button type="button" onClick={handleAddImage} variant="outline">
                    Add URL
                  </Button>
                </div>

                {/* File Upload */}
                <div className="flex items-center gap-2">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    disabled={uploadingImages}
                    className="hidden"
                    id="image-upload"
                  />
                  <Label
                    htmlFor="image-upload"
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-md cursor-pointer hover:bg-muted transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    {uploadingImages ? 'Uploading...' : 'Upload Images'}
                  </Label>
                  {uploadingImages && <Loader2 className="h-4 w-4 animate-spin" />}
                </div>

                {/* Image Preview List */}
                {formData.images.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-sm">Uploaded Images ({formData.images.length})</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {formData.images.map((imageUrl, idx) => (
                        <div key={idx} className="relative group">
                          <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
                            {imageUrl.startsWith('http') ? (
                              <img
                                src={imageUrl}
                                alt={`Image ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
                                Invalid URL
                              </div>
                            )}
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(idx)}
                              className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="testimonial">Client Testimonial (optional)</Label>
              <Textarea
                id="testimonial"
                name="testimonial"
                value={formData.testimonial}
                onChange={handleInputChange}
                placeholder="Client testimonial"
                rows={3}
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button type="submit" disabled={submitting} className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow">
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : selectedProject ? (
                  "Update Project"
                ) : (
                  "Create Project"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsPage;

