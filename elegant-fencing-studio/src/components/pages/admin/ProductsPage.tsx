'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Edit, Trash2, X, Upload, FileText, Loader2 } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiClient } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const ProductsPage = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    subtitle: "",
    category: "",
    description: "",
    price: "",
    status: "Active" as "Active" | "Inactive",
    images: [] as File[],
    imagePreviews: [] as string[],
    applications: [] as string[],
    technicalInfoTabs: [] as Array<{
      id: string;
      name: string;
      type: 'specifications' | 'panelVariations' | 'bimObjects' | 'custom';
      content: any;
    }>,
  });

  const categoryOptions = [
    "Steel & Metal Fencing",
    "Welded Mesh Fencing",
    "Wire Fencing",
    "ECO / PVC Fencing",
    "Fence Accessories",
  ];

  const applicationOptions = [
    "High Security Fence",
    "Perimeter Fence",
    "Sports & Stadium Fence",
    "School Fence",
    "Play ground Fence",
    "Border & Defence Fence",
    "Solar Fence",
    "Oil & Gas Fence",
    "Wall Top Fence",
    "Data center Fence",
    "Industrial Fence",
    "Forest Fence",
    "Railway & Metro Fence",
    "Power plant fence",
    "Air port fence",
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getProducts();
      setProducts(response.products || []);
    } catch (error) {
      console.error('Error loading products:', error);
      toast({
        title: "Error",
        description: "Failed to load products",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (product?: any) => {
    if (product) {
      setSelectedProduct(product);
      
      // Convert old format to new dynamic tabs format
      let technicalInfoTabs: Array<{
        id: string;
        name: string;
        type: 'specifications' | 'panelVariations' | 'bimObjects' | 'custom';
        content: any;
      }> = [];

      // Check if product already has technicalInfoTabs
      if (product.technicalInfoTabs && Array.isArray(product.technicalInfoTabs)) {
        technicalInfoTabs = product.technicalInfoTabs;
      } else {
        // Convert old format to new format
        // Add Specifications tab
        const specifications = Array.isArray(product.specifications) 
          ? product.specifications 
          : (product.specifications && typeof product.specifications === 'object' && product.specifications !== null)
            ? (() => {
                const oldSpecs = product.specifications as any;
                const sections: Array<{ heading: string; description: string }> = [];
                
                if (oldSpecs.nominalHeight || oldSpecs.panelDimensions || oldSpecs.reinforcements || 
                    oldSpecs.postLength || oldSpecs.fixators || oldSpecs.bolts || oldSpecs.wireDiameter) {
                  const fields = [
                    oldSpecs.nominalHeight && `Nominal Fence Height (mm): ${oldSpecs.nominalHeight}`,
                    oldSpecs.panelDimensions && `Panels Width x Height (mm): ${oldSpecs.panelDimensions}`,
                    oldSpecs.reinforcements && `Number of Reinforcements per Panel: ${oldSpecs.reinforcements}`,
                    oldSpecs.postLength && `Post Length (mm): ${oldSpecs.postLength}`,
                    oldSpecs.fixators && `Number of Fixators / Post: ${oldSpecs.fixators}`,
                    oldSpecs.bolts && `Bolts, Washers & Shear-off Nuts / Post: ${oldSpecs.bolts}`,
                    (oldSpecs.wireDiameter || oldSpecs.wireDiameterInfo) && `Wire Diameter Information: ${oldSpecs.wireDiameter || oldSpecs.wireDiameterInfo}`,
                  ].filter(Boolean).join('\n');
                  
                  sections.push({
                    heading: "Technical Specifications",
                    description: fields,
                  });
                }
                
                return sections;
              })()
            : [];
        
        if (specifications.length > 0) {
          technicalInfoTabs.push({
            id: `tab-${Date.now()}-1`,
            name: "Specifications",
            type: 'specifications',
            content: specifications,
          });
        }

        // Add Panel Variations tab
        const panelVariations = Array.isArray(product.panelVariations) 
          ? product.panelVariations 
          : (product.panelVariations && typeof product.panelVariations === 'string' && product.panelVariations.trim() !== '')
            ? (() => {
                try {
                  return JSON.parse(product.panelVariations);
                } catch {
                  return [];
                }
              })()
            : [];
        
        if (panelVariations.length > 0 || (product.panelVariations && typeof product.panelVariations === 'object' && !Array.isArray(product.panelVariations))) {
          // Check if it's already in new format
          if (product.panelVariations && typeof product.panelVariations === 'object' && !Array.isArray(product.panelVariations) && product.panelVariations.headers) {
            technicalInfoTabs.push({
              id: `tab-${Date.now()}-2`,
              name: "Panel Variations",
              type: 'panelVariations',
              content: product.panelVariations,
            });
          } else {
            // Convert old format to new format
            const defaultHeaders = [
              { key: 'panelType', label: 'Panel Type' },
              { key: 'coating', label: 'Coating' },
              { key: 'description', label: 'Description' },
              { key: 'environmentalSuitability', label: 'Environmental Suitability' },
            ];
            
            technicalInfoTabs.push({
              id: `tab-${Date.now()}-2`,
              name: "Panel Variations",
              type: 'panelVariations',
              content: {
                headers: defaultHeaders,
                rows: Array.isArray(panelVariations) ? panelVariations : [],
              },
            });
          }
        }

        // Add BIM Objects tab
        if (product.bimObjects && product.bimObjects.trim() !== '') {
          technicalInfoTabs.push({
            id: `tab-${Date.now()}-3`,
            name: "BIM Objects",
            type: 'bimObjects',
            content: product.bimObjects,
          });
        }
      }

      setFormData({
        name: product.name || "",
        title: product.title || product.name || "",
        subtitle: product.subtitle || "",
        category: product.category || "",
        description: product.description || "",
        price: product.price || "",
        status: product.status || "Active",
        images: [],
        imagePreviews: product.images || [],
        applications: Array.isArray(product.applications) ? product.applications : [],
        technicalInfoTabs: technicalInfoTabs.length > 0 ? technicalInfoTabs : [
          {
            id: `tab-${Date.now()}-1`,
            name: "Specifications",
            type: 'specifications',
            content: [],
          },
          {
            id: `tab-${Date.now()}-2`,
            name: "Panel Variations",
            type: 'panelVariations',
            content: {
              headers: [
                { key: 'panelType', label: 'Panel Type' },
                { key: 'coating', label: 'Coating' },
                { key: 'description', label: 'Description' },
                { key: 'environmentalSuitability', label: 'Environmental Suitability' },
              ],
              rows: [],
            },
          },
          {
            id: `tab-${Date.now()}-3`,
            name: "BIM Objects",
            type: 'bimObjects',
            content: "",
          },
        ],
      });
    } else {
      setSelectedProduct(null);
      setFormData({
        name: "",
        title: "",
        subtitle: "",
        category: "",
        description: "",
        price: "",
        status: "Active",
        images: [],
        imagePreviews: [],
        applications: [],
        technicalInfoTabs: [
          {
            id: `tab-${Date.now()}-1`,
            name: "Specifications",
            type: 'specifications',
            content: [],
          },
          {
            id: `tab-${Date.now()}-2`,
            name: "Panel Variations",
            type: 'panelVariations',
            content: [],
          },
          {
            id: `tab-${Date.now()}-3`,
            name: "BIM Objects",
            type: 'bimObjects',
            content: "",
          },
        ],
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const uploadImagesToCloudinary = async (files: File[]): Promise<string[]> => {
    try {
      const response = await apiClient.uploadImages(files, 'products');
      return response.images.map((img: any) => img.url);
    } catch (error) {
      console.error('Error uploading images:', error);
      throw error;
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const totalImages = formData.images.length + formData.imagePreviews.length;
    const remainingSlots = 5 - totalImages;
    const filesToAdd = files.slice(0, remainingSlots);
    
    setFormData({
      ...formData,
      images: [...formData.images, ...filesToAdd],
    });
  };

  const handleRemoveImage = (index: number, isPreview: boolean) => {
    if (isPreview) {
      setFormData({
        ...formData,
        imagePreviews: formData.imagePreviews.filter((_, i) => i !== index),
      });
    } else {
      setFormData({
        ...formData,
        images: formData.images.filter((_, i) => i !== index),
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleApplicationToggle = (application: string) => {
    setFormData({
      ...formData,
      applications: formData.applications.includes(application)
        ? formData.applications.filter(app => app !== application)
        : [...formData.applications, application],
    });
  };

  // Tab management handlers
  const handleAddTab = () => {
    setFormData({
      ...formData,
      technicalInfoTabs: [
        ...formData.technicalInfoTabs,
        {
          id: `tab-${Date.now()}-${Math.random()}`,
          name: "New Tab",
          type: 'custom',
          content: "",
        },
      ],
    });
  };

  const handleRemoveTab = (tabId: string) => {
    if (formData.technicalInfoTabs.length <= 1) {
      toast({
        title: "Cannot remove",
        description: "At least one tab is required",
        variant: "destructive",
      });
      return;
    }
    setFormData({
      ...formData,
      technicalInfoTabs: formData.technicalInfoTabs.filter(t => t.id !== tabId),
    });
  };

  const handleTabNameChange = (tabId: string, name: string) => {
    const updated = formData.technicalInfoTabs.map(tab => 
      tab.id === tabId ? { ...tab, name } : tab
    );
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handleTabTypeChange = (tabId: string, type: 'specifications' | 'panelVariations' | 'bimObjects' | 'custom') => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId) {
        let newContent: any;
        if (type === 'specifications') {
          newContent = [];
        } else if (type === 'panelVariations') {
          // Initialize with default headers and empty rows
          newContent = {
            headers: [
              { key: 'panelType', label: 'Panel Type' },
              { key: 'coating', label: 'Coating' },
              { key: 'description', label: 'Description' },
              { key: 'environmentalSuitability', label: 'Environmental Suitability' },
            ],
            rows: [],
          };
        } else {
          newContent = "";
        }
        return { ...tab, type, content: newContent };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  // Specifications handlers
  const handleAddSpecificationSection = (tabId: string) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'specifications') {
        const content = Array.isArray(tab.content) ? tab.content : [];
        return {
          ...tab,
          content: [
            ...content,
            {
              heading: "",
              description: "",
            },
          ],
        };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handleRemoveSpecificationSection = (tabId: string, sectionIndex: number) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'specifications') {
        const content = Array.isArray(tab.content) ? tab.content : [];
        return {
          ...tab,
          content: content.filter((_, i) => i !== sectionIndex),
        };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handleSpecificationSectionHeadingChange = (tabId: string, sectionIndex: number, heading: string) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'specifications') {
        const content = Array.isArray(tab.content) ? [...tab.content] : [];
        content[sectionIndex] = {
          ...content[sectionIndex],
          heading,
        };
        return { ...tab, content };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handleSpecificationDescriptionChange = (tabId: string, sectionIndex: number, description: string) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'specifications') {
        const content = Array.isArray(tab.content) ? [...tab.content] : [];
        content[sectionIndex] = {
          ...content[sectionIndex],
          description,
        };
        return { ...tab, content };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  // Panel Variations handlers
  const handleAddPanelVariation = (tabId: string) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'panelVariations') {
        const content = tab.content && typeof tab.content === 'object' && !Array.isArray(tab.content)
          ? tab.content
          : { headers: [
              { key: 'panelType', label: 'Panel Type' },
              { key: 'coating', label: 'Coating' },
              { key: 'description', label: 'Description' },
              { key: 'environmentalSuitability', label: 'Environmental Suitability' },
            ], rows: [] };
        
        const newRow: any = {};
        content.headers.forEach((header: any) => {
          newRow[header.key] = "";
        });
        
        return {
          ...tab,
          content: {
            ...content,
            rows: [...(content.rows || []), newRow],
          },
        };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handleRemovePanelVariation = (tabId: string, index: number) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'panelVariations') {
        const content = tab.content && typeof tab.content === 'object' && !Array.isArray(tab.content)
          ? tab.content
          : { headers: [], rows: [] };
        return {
          ...tab,
          content: {
            ...content,
            rows: (content.rows || []).filter((_: any, i: number) => i !== index),
          },
        };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handlePanelVariationChange = (tabId: string, rowIndex: number, fieldKey: string, value: string) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'panelVariations') {
        const content = tab.content && typeof tab.content === 'object' && !Array.isArray(tab.content)
          ? tab.content
          : { headers: [], rows: [] };
        
        const rows = [...(content.rows || [])];
        rows[rowIndex] = {
          ...rows[rowIndex],
          [fieldKey]: value,
        };
        
        return {
          ...tab,
          content: {
            ...content,
            rows,
          },
        };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handlePanelVariationHeaderChange = (tabId: string, headerIndex: number, label: string) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'panelVariations') {
        const content = tab.content && typeof tab.content === 'object' && !Array.isArray(tab.content)
          ? tab.content
          : { headers: [], rows: [] };
        
        const headers = [...(content.headers || [])];
        headers[headerIndex] = {
          ...headers[headerIndex],
          label,
        };
        
        return {
          ...tab,
          content: {
            ...content,
            headers,
          },
        };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handleAddPanelVariationHeader = (tabId: string) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'panelVariations') {
        const content = tab.content && typeof tab.content === 'object' && !Array.isArray(tab.content)
          ? tab.content
          : { headers: [], rows: [] };
        
        const newKey = `column${(content.headers || []).length + 1}`;
        const headers = [...(content.headers || []), { key: newKey, label: 'New Column' }];
        
        // Add empty value for this new column in all existing rows
        const rows = (content.rows || []).map((row: any) => ({
          ...row,
          [newKey]: "",
        }));
        
        return {
          ...tab,
          content: {
            ...content,
            headers,
            rows,
          },
        };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handleRemovePanelVariationHeader = (tabId: string, headerIndex: number) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'panelVariations') {
        const content = tab.content && typeof tab.content === 'object' && !Array.isArray(tab.content)
          ? tab.content
          : { headers: [], rows: [] };
        
        const headers = [...(content.headers || [])];
        const removedHeader = headers[headerIndex];
        headers.splice(headerIndex, 1);
        
        // Remove the field from all rows
        const rows = (content.rows || []).map((row: any) => {
          const newRow = { ...row };
          delete newRow[removedHeader.key];
          return newRow;
        });
        
        return {
          ...tab,
          content: {
            ...content,
            headers,
            rows,
          },
        };
      }
      return tab;
    });
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  // BIM Objects and Custom handlers
  const handleTabContentChange = (tabId: string, content: string) => {
    const updated = formData.technicalInfoTabs.map(tab => 
      tab.id === tabId ? { ...tab, content } : tab
    );
    setFormData({
      ...formData,
      technicalInfoTabs: updated,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Upload new images to Cloudinary
      let uploadedImageUrls: string[] = [];
      if (formData.images.length > 0) {
        uploadedImageUrls = await uploadImagesToCloudinary(formData.images);
      }
      
      // Combine existing images (already Cloudinary URLs) with newly uploaded ones
      const allImages = [...formData.imagePreviews, ...uploadedImageUrls];

      const productData = {
        name: formData.name || formData.title,
        title: formData.title,
        subtitle: formData.subtitle,
        category: formData.category || "General",
        description: formData.description,
        price: formData.price,
        status: formData.status,
        images: allImages,
        applications: formData.applications,
        technicalInfoTabs: formData.technicalInfoTabs,
        // Keep old fields for backward compatibility
        specifications: (() => {
          const specTab = formData.technicalInfoTabs.find(t => t.type === 'specifications');
          return specTab && Array.isArray(specTab.content) && specTab.content.length > 0 
            ? JSON.stringify(specTab.content) 
            : '';
        })(),
        panelVariations: (() => {
          const panelTab = formData.technicalInfoTabs.find(t => t.type === 'panelVariations');
          return panelTab && Array.isArray(panelTab.content) && panelTab.content.length > 0 
            ? JSON.stringify(panelTab.content) 
            : '';
        })(),
        bimObjects: (() => {
          const bimTab = formData.technicalInfoTabs.find(t => t.type === 'bimObjects');
          return bimTab && typeof bimTab.content === 'string' ? bimTab.content : '';
        })(),
      };

      if (selectedProduct) {
        await apiClient.updateProduct(selectedProduct.id, productData);
        toast({
          title: "Success",
          description: "Product updated successfully",
        });
      } else {
        await apiClient.createProduct(productData);
        toast({
          title: "Success",
          description: "Product created successfully",
        });
      }

      await loadProducts();
      handleCloseModal();
    } catch (error: any) {
      console.error('Error saving product:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save product",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      await apiClient.deleteProduct(id);
      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
      await loadProducts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete product",
        variant: "destructive",
      });
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground">Products</h1>
          <p className="text-muted-foreground mt-2">Manage your product catalog</p>
        </div>
        <Button 
          onClick={() => handleOpenModal()}
          className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Product List</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
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
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                  </TableCell>
                </TableRow>
              ) : filteredProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No products found
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-mono text-xs">{product.id.slice(0, 8)}...</TableCell>
                    <TableCell className="font-medium">{product.title || product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price || "N/A"}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.status === "Active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleOpenModal(product)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(product.id)}
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
              {selectedProduct ? "Edit Product" : "Add New Product"}
            </DialogTitle>
            <DialogDescription>
              {selectedProduct 
                ? "Update product information and technical details" 
                : "Fill in the product details and upload images"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b pb-2">Basic Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter product title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryOptions.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleInputChange}
                  placeholder="Enter product subtitle (optional)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Enter product price (optional)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter product description"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Applications (Optional)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border rounded-lg bg-muted/30 max-h-64 overflow-y-auto">
                  {applicationOptions.map((application) => (
                    <div key={application} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`app-${application}`}
                        checked={formData.applications.includes(application)}
                        onChange={() => handleApplicationToggle(application)}
                        className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
                      />
                      <Label
                        htmlFor={`app-${application}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {application}
                      </Label>
                    </div>
                  ))}
                </div>
                {formData.applications.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    {formData.applications.length} application(s) selected
                  </p>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                Product Images (Max 5)
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {formData.imagePreviews.map((imageUrl, index) => (
                  <div key={`preview-${index}`} className="relative group">
                    <div className="aspect-square rounded-lg border-2 border-dashed border-border overflow-hidden bg-muted">
                      {imageUrl.startsWith('http') ? (
                        <img
                          src={imageUrl}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : imageUrl.startsWith('data:') ? (
                        <img
                          src={imageUrl}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={imageUrl}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleRemoveImage(index, true)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                {formData.images.map((image, index) => (
                  <div key={`new-${index}`} className="relative group">
                    <div className="aspect-square rounded-lg border-2 border-dashed border-border overflow-hidden bg-muted">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`New ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleRemoveImage(index, false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                {(formData.images.length + formData.imagePreviews.length) < 5 && (
                  <label className="aspect-square rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors bg-muted/50">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground text-center px-2">
                      Upload Image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                      multiple
                    />
                  </label>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {(formData.images.length + formData.imagePreviews.length)} / 5 images uploaded
              </p>
            </div>

            {/* Technical Information */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Technical Information
                </h3>
                <Button
                  type="button"
                  onClick={handleAddTab}
                  variant="outline"
                  size="sm"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Tab
                </Button>
              </div>
              
              {formData.technicalInfoTabs.length > 0 ? (
                <Tabs defaultValue={formData.technicalInfoTabs[0]?.id} className="w-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b">
                      <TabsList className="inline-flex">
                        {formData.technicalInfoTabs.map((tab) => (
                          <TabsTrigger key={tab.id} value={tab.id} className="min-w-[120px]">
                            {tab.name}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {formData.technicalInfoTabs.map((tab) => (
                        <div key={tab.id} className="flex items-center gap-1">
                          <Input
                            value={tab.name}
                            onChange={(e) => handleTabNameChange(tab.id, e.target.value)}
                            className="h-8 w-32 text-xs"
                            placeholder="Tab name"
                          />
                          {formData.technicalInfoTabs.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveTab(tab.id)}
                              className="h-8 w-8 text-destructive hover:text-destructive"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Tab Content */}
                  {formData.technicalInfoTabs.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id} className="space-y-4 mt-4">
                      {/* Tab Type Selector */}
                      <div className="flex items-center gap-2 mb-4">
                        <Label className="text-sm">Tab Type:</Label>
                        <select
                          value={tab.type}
                          onChange={(e) => handleTabTypeChange(tab.id, e.target.value as any)}
                          className="px-3 py-1.5 text-sm border border-border rounded-md bg-background"
                        >
                          <option value="specifications">Specifications</option>
                          <option value="panelVariations">Panel Variations</option>
                          <option value="bimObjects">BIM Objects</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>

                      {/* Specifications Content */}
                      {tab.type === 'specifications' && (
                        <>
                          <div className="flex items-center justify-between mb-4">
                            <Label>Product Specifications</Label>
                            <Button
                              type="button"
                              onClick={() => handleAddSpecificationSection(tab.id)}
                              variant="outline"
                              size="sm"
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              Add Section
                            </Button>
                          </div>

                          {(!Array.isArray(tab.content) || tab.content.length === 0) ? (
                            <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                              <p className="text-muted-foreground mb-4">No specification sections added yet.</p>
                              <Button
                                type="button"
                                onClick={() => handleAddSpecificationSection(tab.id)}
                                variant="outline"
                              >
                                <Plus className="mr-2 h-4 w-4" />
                                Add First Section
                              </Button>
                            </div>
                          ) : (
                            <div className="space-y-6">
                              {(tab.content as Array<{ heading: string; description: string }>).map((section, sectionIndex) => (
                                <Card key={sectionIndex} className="border border-border">
                                  <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1 space-y-2">
                                        <Label>Section Heading</Label>
                                        <Input
                                          value={section.heading}
                                          onChange={(e) => handleSpecificationSectionHeadingChange(tab.id, sectionIndex, e.target.value)}
                                          placeholder="e.g., Technical Specifications, Coating Options, etc."
                                          className="font-semibold"
                                        />
                                      </div>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleRemoveSpecificationSection(tab.id, sectionIndex)}
                                        className="ml-4 text-destructive hover:text-destructive"
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                      <Label>Description</Label>
                                      <Textarea
                                        value={section.description}
                                        onChange={(e) => handleSpecificationDescriptionChange(tab.id, sectionIndex, e.target.value)}
                                        placeholder="Enter detailed description for this section..."
                                        rows={6}
                                        className="resize-none"
                                      />
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          )}
                        </>
                      )}

                      {/* Panel Variations Content */}
                      {tab.type === 'panelVariations' && (
                        <>
                          <div className="space-y-4">
                            {/* Headers Configuration */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label>Table Headers</Label>
                                <Button
                                  type="button"
                                  onClick={() => handleAddPanelVariationHeader(tab.id)}
                                  variant="outline"
                                  size="sm"
                                >
                                  <Plus className="mr-2 h-3 w-3" />
                                  Add Header
                                </Button>
                              </div>
                              {(() => {
                                const content = tab.content && typeof tab.content === 'object' && !Array.isArray(tab.content)
                                  ? tab.content
                                  : { headers: [
                                      { key: 'panelType', label: 'Panel Type' },
                                      { key: 'coating', label: 'Coating' },
                                      { key: 'description', label: 'Description' },
                                      { key: 'environmentalSuitability', label: 'Environmental Suitability' },
                                    ], rows: [] };
                                const headers = content.headers || [];
                                
                                return headers.length > 0 ? (
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {headers.map((header: any, headerIndex: number) => (
                                      <div key={headerIndex} className="flex items-center gap-1">
                                        <Input
                                          value={header.label}
                                          onChange={(e) => handlePanelVariationHeaderChange(tab.id, headerIndex, e.target.value)}
                                          placeholder="Header name"
                                          className="text-sm"
                                        />
                                        {headers.length > 1 && (
                                          <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleRemovePanelVariationHeader(tab.id, headerIndex)}
                                            className="h-8 w-8 text-destructive hover:text-destructive"
                                          >
                                            <X className="h-3 w-3" />
                                          </Button>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-sm text-muted-foreground">No headers configured. Add a header to start.</p>
                                );
                              })()}
                            </div>

                            {/* Table with Variations */}
                            <div className="flex items-center justify-between">
                              <Label>Panel Variations</Label>
                              <Button
                                type="button"
                                onClick={() => handleAddPanelVariation(tab.id)}
                                variant="outline"
                                size="sm"
                              >
                                <Plus className="mr-2 h-4 w-4" />
                                Add Variation
                              </Button>
                            </div>
                            
                            {(() => {
                              const content = tab.content && typeof tab.content === 'object' && !Array.isArray(tab.content)
                                ? tab.content
                                : { headers: [
                                    { key: 'panelType', label: 'Panel Type' },
                                    { key: 'coating', label: 'Coating' },
                                    { key: 'description', label: 'Description' },
                                    { key: 'environmentalSuitability', label: 'Environmental Suitability' },
                                  ], rows: [] };
                              const headers = content.headers || [];
                              const rows = content.rows || [];
                              
                              if (headers.length === 0) {
                                return (
                                  <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                                    <p className="text-muted-foreground mb-4">Please add at least one table header first.</p>
                                  </div>
                                );
                              }
                              
                              if (rows.length === 0) {
                                return (
                                  <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                                    <p className="text-muted-foreground mb-4">No panel variations added yet.</p>
                                    <Button
                                      type="button"
                                      onClick={() => handleAddPanelVariation(tab.id)}
                                      variant="outline"
                                    >
                                      <Plus className="mr-2 h-4 w-4" />
                                      Add First Variation
                                    </Button>
                                  </div>
                                );
                              }
                              
                              return (
                                <div className="border rounded-lg overflow-x-auto">
                                  <Table>
                                    <TableHeader>
                                      <TableRow>
                                        {headers.map((header: any, headerIndex: number) => (
                                          <TableHead key={headerIndex} className="min-w-[150px]">
                                            {header.label}
                                          </TableHead>
                                        ))}
                                        <TableHead className="w-[80px]">Actions</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {rows.map((row: any, rowIndex: number) => (
                                        <TableRow key={rowIndex}>
                                          {headers.map((header: any, headerIndex: number) => (
                                            <TableCell key={headerIndex}>
                                              <Input
                                                value={row[header.key] || ""}
                                                onChange={(e) => handlePanelVariationChange(tab.id, rowIndex, header.key, e.target.value)}
                                                placeholder={`Enter ${header.label.toLowerCase()}`}
                                              />
                                            </TableCell>
                                          ))}
                                          <TableCell>
                                            <Button
                                              type="button"
                                              variant="ghost"
                                              size="icon"
                                              onClick={() => handleRemovePanelVariation(tab.id, rowIndex)}
                                            >
                                              <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </div>
                              );
                            })()}
                          </div>
                        </>
                      )}

                      {/* BIM Objects and Custom Content */}
                      {(tab.type === 'bimObjects' || tab.type === 'custom') && (
                        <div className="space-y-2">
                          <Label>{tab.type === 'bimObjects' ? 'BIM Objects' : 'Custom Content'}</Label>
                          <Textarea
                            value={typeof tab.content === 'string' ? tab.content : ''}
                            onChange={(e) => handleTabContentChange(tab.id, e.target.value)}
                            placeholder={tab.type === 'bimObjects' 
                              ? "Enter information about BIM objects, CAD files, and Revit files..."
                              : "Enter custom content for this tab..."}
                            rows={8}
                          />
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              ) : (
                <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                  <p className="text-muted-foreground mb-4">No tabs added yet.</p>
                  <Button
                    type="button"
                    onClick={handleAddTab}
                    variant="outline"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add First Tab
                  </Button>
                </div>
              )}
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
                ) : selectedProduct ? (
                  "Update Product"
                ) : (
                  "Create Product"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
