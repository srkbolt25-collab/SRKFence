'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, Edit, Trash2, X, Upload, Loader2 } from "lucide-react";
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

const ApplicationsPage = () => {
  const { toast } = useToast();
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    description: "",
    longDescription: "",
    image: "",
    images: [] as string[],
    features: [] as string[],
    benefits: [] as string[],
    specifications: [] as string[],
    useCases: [] as string[],
    metaTitle: "",
    metaDescription: "",
    focusKeywords: "",
    metaKeywords: "",
    keywords: "",
    status: "Published" as "Published" | "Draft",
  });
  const [newFeature, setNewFeature] = useState("");
  const [newBenefit, setNewBenefit] = useState("");
  const [newSpec, setNewSpec] = useState("");
  const [newUseCase, setNewUseCase] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [uploadingImages, setUploadingImages] = useState(false);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getApplications();
      setApplications(response.applications || []);
    } catch (error) {
      console.error('Error loading applications:', error);
      toast({
        title: "Error",
        description: "Failed to load applications",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (application?: any) => {
    if (application) {
      setSelectedApplication(application);
      setFormData({
        slug: application.slug || "",
        title: application.title || "",
        description: application.description || "",
        longDescription: application.longDescription || "",
        image: application.image || "",
        images: application.images || [],
        features: application.features || [],
        benefits: application.benefits || [],
        specifications: application.specifications || [],
        useCases: application.useCases || [],
        metaTitle: application.metaTitle || "",
        metaDescription: application.metaDescription || "",
        focusKeywords: application.focusKeywords || "",
        metaKeywords: application.metaKeywords || "",
        keywords: application.keywords || "",
        status: application.status || "Published",
      });
    } else {
      setSelectedApplication(null);
      setFormData({
        slug: "",
        title: "",
        description: "",
        longDescription: "",
        image: "",
        images: [],
        features: [],
        benefits: [],
        specifications: [],
        useCases: [],
        metaTitle: "",
        metaDescription: "",
        focusKeywords: "",
        metaKeywords: "",
        keywords: "",
        status: "Published",
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApplication(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddItem = (type: 'features' | 'benefits' | 'specifications' | 'useCases') => {
    const setters = {
      features: setNewFeature,
      benefits: setNewBenefit,
      specifications: setNewSpec,
      useCases: setNewUseCase,
    };
    const values = {
      features: newFeature,
      benefits: newBenefit,
      specifications: newSpec,
      useCases: newUseCase,
    };

    const newValue = values[type].trim();
    if (newValue) {
      setFormData({
        ...formData,
        [type]: [...formData[type], newValue],
      });
      setters[type]("");
    }
  };

  const handleRemoveItem = (type: 'features' | 'benefits' | 'specifications' | 'useCases', index: number) => {
    setFormData({
      ...formData,
      [type]: formData[type].filter((_, i) => i !== index),
    });
  };

  const handleAddImageUrl = () => {
    if (newImageUrl.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, newImageUrl.trim()],
      });
      setNewImageUrl("");
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
      const response = await apiClient.uploadImages(fileArray, 'applications');
      
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
      // Empty arrays are kept as empty arrays (they're valid values)
      const cleanedData = {
        ...formData,
        slug: formData.slug.trim() || undefined,
        title: formData.title.trim() || undefined,
        description: formData.description.trim() || undefined,
        longDescription: formData.longDescription.trim() || undefined,
        image: formData.image.trim() || undefined,
        metaTitle: formData.metaTitle.trim() || undefined,
        metaDescription: formData.metaDescription.trim() || undefined,
        focusKeywords: formData.focusKeywords.trim() || undefined,
        metaKeywords: formData.metaKeywords.trim() || undefined,
        keywords: formData.keywords.trim() || undefined,
        // Keep arrays as-is (empty arrays are valid)
        images: formData.images,
        features: formData.features,
        benefits: formData.benefits,
        specifications: formData.specifications,
        useCases: formData.useCases,
      };

      if (selectedApplication) {
        await apiClient.updateApplication(selectedApplication.id, cleanedData);
        toast({
          title: "Success",
          description: "Application updated successfully",
        });
      } else {
        await apiClient.createApplication(cleanedData);
        toast({
          title: "Success",
          description: "Application created successfully",
        });
      }

      await loadApplications();
      handleCloseModal();
    } catch (error: any) {
      console.error('Error saving application:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save application",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) {
      return;
    }

    try {
      await apiClient.deleteApplication(id);
      toast({
        title: "Success",
        description: "Application deleted successfully",
      });
      await loadApplications();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete application",
        variant: "destructive",
      });
    }
  };

  const filteredApplications = applications.filter((app) =>
    app.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.slug?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground">Applications</h1>
          <p className="text-muted-foreground mt-2">Manage application pages</p>
        </div>
        <Button 
          onClick={() => handleOpenModal()}
          className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Application
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Application List</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search applications..." 
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
                <TableHead>Slug</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                  </TableCell>
                </TableRow>
              ) : filteredApplications.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                    No applications found
                  </TableCell>
                </TableRow>
              ) : (
                filteredApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-mono text-xs">{app.slug}</TableCell>
                    <TableCell className="font-medium">{app.title}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        app.status === "Published" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {app.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleOpenModal(app)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(app.id)}
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
              {selectedApplication ? "Edit Application" : "Add New Application"}
            </DialogTitle>
            <DialogDescription>
              {selectedApplication 
                ? "Update application information" 
                : "Fill in the application details"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (optional)</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="e.g., residential-fencing"
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

            <div className="space-y-2">
              <Label htmlFor="title">Title (optional)</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Application title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Short Description (optional)</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Short description"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="longDescription">Long Description (optional)</Label>
              <Textarea
                id="longDescription"
                name="longDescription"
                value={formData.longDescription}
                onChange={handleInputChange}
                placeholder="Detailed description"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Main Image URL (optional)</Label>
              <Input
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Main image URL (for header/thumbnail)"
              />
            </div>

            {/* Multiple Images */}
            <div className="space-y-2">
              <Label>Additional Images (optional)</Label>
              <div className="space-y-4">
                {/* Image URL Input */}
                <div className="flex gap-2">
                  <Input
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="Add image URL"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddImageUrl();
                      }
                    }}
                  />
                  <Button type="button" onClick={handleAddImageUrl} variant="outline">
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

            {/* Features */}
            <div className="space-y-2">
              <Label>Features (optional)</Label>
              <div className="flex gap-2">
                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="Add feature"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddItem('features');
                    }
                  }}
                />
                <Button type="button" onClick={() => handleAddItem('features')} variant="outline">
                  Add
                </Button>
              </div>
              <div className="space-y-1">
                {formData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">{feature}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem('features', idx)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              <Label>Benefits (optional)</Label>
              <div className="flex gap-2">
                <Input
                  value={newBenefit}
                  onChange={(e) => setNewBenefit(e.target.value)}
                  placeholder="Add benefit"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddItem('benefits');
                    }
                  }}
                />
                <Button type="button" onClick={() => handleAddItem('benefits')} variant="outline">
                  Add
                </Button>
              </div>
              <div className="space-y-1">
                {formData.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">{benefit}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem('benefits', idx)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-2">
              <Label>Specifications (optional)</Label>
              <div className="flex gap-2">
                <Input
                  value={newSpec}
                  onChange={(e) => setNewSpec(e.target.value)}
                  placeholder="Add specification"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddItem('specifications');
                    }
                  }}
                />
                <Button type="button" onClick={() => handleAddItem('specifications')} variant="outline">
                  Add
                </Button>
              </div>
              <div className="space-y-1">
                {formData.specifications.map((spec, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">{spec}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem('specifications', idx)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-2">
              <Label>Use Cases (optional)</Label>
              <div className="flex gap-2">
                <Input
                  value={newUseCase}
                  onChange={(e) => setNewUseCase(e.target.value)}
                  placeholder="Add use case"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddItem('useCases');
                    }
                  }}
                />
                <Button type="button" onClick={() => handleAddItem('useCases')} variant="outline">
                  Add
                </Button>
              </div>
              <div className="space-y-1">
                {formData.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">{useCase}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem('useCases', idx)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Fields */}
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
                    placeholder="e.g., fencing applications, security solutions"
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
                ) : selectedApplication ? (
                  "Update Application"
                ) : (
                  "Create Application"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplicationsPage;

