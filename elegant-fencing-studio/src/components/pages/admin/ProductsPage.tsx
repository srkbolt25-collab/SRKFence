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
  const [categoryOptions, setCategoryOptions] = useState<Array<{ id: string; name: string; displayOrder?: number }>>([]);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    subtitle: "",
    displayOrder: "0",
    category: "",
    description: [] as Array<{ title: string; content: string }>,
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
    technicalInfoFiles: {} as Record<string, File[]>, // tabId -> files for upload
  });

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
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoadingCategories(true);
      const response = await apiClient.getCategories();
      setCategoryOptions(
        (response.categories || []).sort(
          (a, b) => (a.displayOrder ?? 9999) - (b.displayOrder ?? 9999) || a.name.localeCompare(b.name)
        )
      );
    } catch (error) {
      console.error('Error loading categories:', error);
      setCategoryOptions([]);
    } finally {
      setLoadingCategories(false);
    }
  };

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
          let bimContent: any = product.bimObjects;
          // Try to parse if it's JSON string
          if (product.bimObjects.trim().startsWith('{')) {
            try {
              bimContent = JSON.parse(product.bimObjects);
            } catch {
              // If parse fails, treat as description
              bimContent = { title: '', description: product.bimObjects, files: [] };
            }
          } else {
            // Old format - plain text description
            bimContent = { title: '', description: product.bimObjects, files: [] };
          }
          technicalInfoTabs.push({
            id: `tab-${Date.now()}-3`,
            name: "BIM Objects",
            type: 'bimObjects',
            content: bimContent,
          });
        }
      }

      setFormData({
        name: product.name || "",
        title: product.title || product.name || "",
        subtitle: product.subtitle || "",
        displayOrder: String(
          typeof product.displayOrder === "number" && Number.isFinite(product.displayOrder)
            ? product.displayOrder
            : 0
        ),
        category: product.category || "",
        description: Array.isArray(product.description) ? product.description : (product.description ? [{ title: "Description", content: product.description }] : []),
        metaTitle: product.metaTitle || "",
        metaDescription: product.metaDescription || "",
        focusKeywords: product.focusKeywords || "",
        metaKeywords: product.metaKeywords || "",
        canonicalUrl: product.canonicalUrl || "",
        ogTitle: product.ogTitle || "",
        ogDescription: product.ogDescription || "",
        ogImage: product.ogImage || "",
        twitterCard: product.twitterCard || "summary_large_image",
        twitterTitle: product.twitterTitle || "",
        twitterDescription: product.twitterDescription || "",
        twitterImage: product.twitterImage || "",
        robotsMeta: product.robotsMeta || "index, follow",
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
            content: { title: '', description: '', files: [] },
          },
        ],
        technicalInfoFiles: {},
      });
    } else {
      setSelectedProduct(null);
      setFormData({
        name: "",
        title: "",
        subtitle: "",
        displayOrder: "0",
        category: "",
        description: [],
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
            content: { title: '', description: '', files: [] },
          },
        ],
        technicalInfoFiles: {},
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

  // Description section handlers
  const handleAddDescriptionSection = () => {
    setFormData({
      ...formData,
      description: [
        ...formData.description,
        { title: "", content: "" },
      ],
    });
  };

  const handleRemoveDescriptionSection = (index: number) => {
    setFormData({
      ...formData,
      description: formData.description.filter((_, i) => i !== index),
    });
  };

  const handleDescriptionTitleChange = (index: number, title: string) => {
    const updated = [...formData.description];
    updated[index] = { ...updated[index], title };
    setFormData({ ...formData, description: updated });
  };

  const handleDescriptionContentChange = (index: number, content: string) => {
    const updated = [...formData.description];
    updated[index] = { ...updated[index], content };
    setFormData({ ...formData, description: updated });
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

  // Specification section file/drawing handlers
  const handleSpecificationFileUpload = (tabId: string, sectionIndex: number, files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    const fileArray = Array.from(files);
    const fileKey = `${tabId}-${sectionIndex}`;
    
    setFormData({
      ...formData,
      technicalInfoFiles: {
        ...formData.technicalInfoFiles,
        [fileKey]: [...(formData.technicalInfoFiles[fileKey] || []), ...fileArray],
      },
    });
  };

  const handleRemoveSpecificationFile = (tabId: string, sectionIndex: number, fileIndex: number) => {
    const fileKey = `${tabId}-${sectionIndex}`;
    const currentFiles = formData.technicalInfoFiles[fileKey] || [];
    
    setFormData({
      ...formData,
      technicalInfoFiles: {
        ...formData.technicalInfoFiles,
        [fileKey]: currentFiles.filter((_, i) => i !== fileIndex),
      },
    });
  };

  const handleRemoveSpecificationDrawing = (tabId: string, sectionIndex: number, drawingIndex: number) => {
    const updated = formData.technicalInfoTabs.map(tab => {
      if (tab.id === tabId && tab.type === 'specifications') {
        const content = Array.isArray(tab.content) ? [...tab.content] : [];
        const section = content[sectionIndex];
        if (section && section.drawings) {
          content[sectionIndex] = {
            ...section,
            drawings: section.drawings.filter((_: any, i: number) => i !== drawingIndex),
          };
        }
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

      // Upload technical info files and update tabs
      let technicalInfoTabsWithFiles = formData.technicalInfoTabs;
      const allTechnicalFiles = Object.values(formData.technicalInfoFiles).flat();
      
      if (allTechnicalFiles.length > 0) {
        const uploadedFileUrls = await uploadImagesToCloudinary(allTechnicalFiles);
        
        // Map uploaded files back to their respective sections
        let fileIndex = 0;
        technicalInfoTabsWithFiles = formData.technicalInfoTabs.map(tab => {
          if (tab.type === 'specifications' && Array.isArray(tab.content)) {
            const updatedContent = tab.content.map((section, sectionIndex) => {
              const fileKey = `${tab.id}-${sectionIndex}`;
              const filesForSection = formData.technicalInfoFiles[fileKey] || [];
              
              if (filesForSection.length > 0) {
                const newDrawings = filesForSection.map(() => {
                  const url = uploadedFileUrls[fileIndex++];
                  return { url, name: allTechnicalFiles[fileIndex - 1]?.name || 'File' };
                });
                
                return {
                  ...section,
                  drawings: [...(section.drawings || []), ...newDrawings],
                };
              }
              return section;
            });
            return { ...tab, content: updatedContent };
          }
          return tab;
        });
      }

      const productData = {
        name: formData.name || formData.title,
        title: formData.title,
        subtitle: formData.subtitle,
        displayOrder: Math.max(0, Number.parseInt(formData.displayOrder || "0", 10) || 0),
        category: formData.category || "General",
        description: formData.description,
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
        status: formData.status,
        images: allImages,
        applications: formData.applications,
        technicalInfoTabs: technicalInfoTabsWithFiles,
        // Keep old fields for backward compatibility
        specifications: (() => {
          const specTab = technicalInfoTabsWithFiles.find(t => t.type === 'specifications');
          return specTab && Array.isArray(specTab.content) && specTab.content.length > 0 
            ? JSON.stringify(specTab.content) 
            : '';
        })(),
        panelVariations: (() => {
          const panelTab = technicalInfoTabsWithFiles.find(t => t.type === 'panelVariations');
          return panelTab && Array.isArray(panelTab.content) && panelTab.content.length > 0 
            ? JSON.stringify(panelTab.content) 
            : '';
        })(),
        bimObjects: (() => {
          const bimTab = technicalInfoTabsWithFiles.find(t => t.type === 'bimObjects');
          if (!bimTab) return '';
          if (typeof bimTab.content === 'string') return bimTab.content;
          if (typeof bimTab.content === 'object' && bimTab.content !== null) {
            return JSON.stringify(bimTab.content);
          }
          return '';
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

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) {
      toast({
        title: "Error",
        description: "Category name cannot be empty",
        variant: "destructive",
      });
      return;
    }

    if (categoryOptions.some(cat => cat.name.toLowerCase() === newCategoryName.trim().toLowerCase())) {
      toast({
        title: "Error",
        description: "Category already exists",
        variant: "destructive",
      });
      return;
    }

    try {
      const nextOrder =
        categoryOptions.length > 0
          ? Math.max(...categoryOptions.map((cat) => cat.displayOrder ?? 0)) + 1
          : 1;
      const newCategory = await apiClient.createCategory({
        name: newCategoryName.trim(),
        displayOrder: nextOrder,
      });
      setCategoryOptions(
        [...categoryOptions, { id: newCategory.id, name: newCategory.name, displayOrder: newCategory.displayOrder }]
          .sort((a, b) => (a.displayOrder ?? 9999) - (b.displayOrder ?? 9999) || a.name.localeCompare(b.name))
      );
      setFormData({ ...formData, category: newCategory.name });
      setNewCategoryName("");
      setIsAddCategoryOpen(false);
      toast({
        title: "Success",
        description: "Category added successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to add category",
        variant: "destructive",
      });
    }
  };

  const handleUpdateCategoryOrder = async (categoryId: string, rawValue: string) => {
    const parsed = Number(rawValue);
    if (!Number.isInteger(parsed) || parsed < 0) {
      toast({
        title: "Error",
        description: "Display order must be a non-negative whole number",
        variant: "destructive",
      });
      return;
    }

    try {
      const updatedCategory = await apiClient.updateCategoryOrder(categoryId, parsed);
      setCategoryOptions((prev) =>
        prev
          .map((cat) =>
            cat.id === categoryId ? { ...cat, displayOrder: updatedCategory.displayOrder } : cat
          )
          .sort((a, b) => (a.displayOrder ?? 9999) - (b.displayOrder ?? 9999) || a.name.localeCompare(b.name))
      );
      toast({
        title: "Success",
        description: "Category order updated",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update category order",
        variant: "destructive",
      });
    }
  };

  const handleDeleteCategory = async (categoryId: string, categoryName: string) => {
    if (!confirm(`Are you sure you want to delete the category "${categoryName}"?`)) {
      return;
    }

    try {
      await apiClient.deleteCategory(categoryId);
      setCategoryOptions(categoryOptions.filter(cat => cat.id !== categoryId));
      
      // If the deleted category was selected, clear the selection
      if (formData.category === categoryName) {
        setFormData({ ...formData, category: "" });
      }
      
      toast({
        title: "Success",
        description: "Category deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete category",
        variant: "destructive",
      });
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedFilteredProducts = filteredProducts.reduce<Record<string, any[]>>((acc, product) => {
    const categoryName = product.category || "Uncategorized";
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(product);
    return acc;
  }, {});

  const categoryDisplayOrderMap = new Map(
    categoryOptions.map((category, index) => [category.name, category.displayOrder ?? index + 1])
  );

  const groupedCategoryNames = Object.keys(groupedFilteredProducts).sort((a, b) => {
    const aOrder = categoryDisplayOrderMap.get(a) ?? 9999;
    const bOrder = categoryDisplayOrderMap.get(b) ?? 9999;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.localeCompare(b);
  });

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
          {loading ? (
            <div className="text-center py-8">
              <Loader2 className="h-6 w-6 animate-spin mx-auto" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No products found</div>
          ) : (
            <div className="space-y-6">
              {groupedCategoryNames.map((categoryName) => {
                const categoryProducts = [...groupedFilteredProducts[categoryName]].sort((a, b) => {
                  const aOrder = typeof a.displayOrder === "number" ? a.displayOrder : 9999;
                  const bOrder = typeof b.displayOrder === "number" ? b.displayOrder : 9999;
                  if (aOrder !== bOrder) return aOrder - bOrder;
                  return (a.title || a.name || "").localeCompare(b.title || b.name || "");
                });

                return (
                  <div key={categoryName} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{categoryName}</h3>
                      <span className="text-xs text-muted-foreground">{categoryProducts.length} product(s)</span>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Order</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {categoryProducts.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell className="font-mono text-xs">{product.id.slice(0, 8)}...</TableCell>
                            <TableCell className="font-medium">{product.title || product.name}</TableCell>
                            <TableCell>{typeof product.displayOrder === "number" ? product.displayOrder : 9999}</TableCell>
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
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                );
              })}
            </div>
          )}
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
                <div className="space-y-2">
                  <Select
                    value={formData.category}
                    onValueChange={(value) => {
                      if (value === "add-new") {
                        setIsAddCategoryOpen(true);
                      } else {
                        setFormData({ ...formData, category: value });
                      }
                    }}
                    required
                    disabled={loadingCategories}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder={loadingCategories ? "Loading categories..." : "Select a category"} />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="add-new" className="text-primary font-semibold">
                        <Plus className="inline h-4 w-4 mr-2" />
                        Add New Category
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {categoryOptions.length > 0 && (
                    <div className="flex flex-wrap gap-2 p-3 border rounded-lg bg-muted/30">
                      <span className="text-sm text-muted-foreground font-medium">Manage Categories:</span>
                      {categoryOptions.map((category) => (
                        <div
                          key={category.id}
                          className="flex items-center gap-2 px-2 py-1 bg-background border rounded-md text-sm"
                        >
                          <span>{category.name}</span>
                          <Input
                            type="number"
                            min={0}
                            defaultValue={category.displayOrder ?? 0}
                            className="h-7 w-20 text-xs"
                            onBlur={(e) => handleUpdateCategoryOrder(category.id, e.target.value)}
                            aria-label={`Display order for ${category.name}`}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteCategory(category.id, category.name)}
                            className="h-5 w-5 text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
                <Label htmlFor="displayOrder">Display Order</Label>
                <Input
                  id="displayOrder"
                  name="displayOrder"
                  type="number"
                  min={0}
                  value={formData.displayOrder}
                  onChange={handleInputChange}
                  placeholder="0"
                />
                <p className="text-xs text-muted-foreground">
                  Lower number shows first on products page.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Description Sections *</Label>
                  <Button
                    type="button"
                    onClick={handleAddDescriptionSection}
                    variant="outline"
                    size="sm"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Section
                  </Button>
                </div>
                
                {formData.description.length === 0 ? (
                  <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                    <p className="text-muted-foreground mb-4">No description sections added yet.</p>
                    <Button
                      type="button"
                      onClick={handleAddDescriptionSection}
                      variant="outline"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add First Section
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {formData.description.map((section, index) => (
                      <Card key={index} className="border border-border">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex-1 space-y-2">
                              <Label>Section Title</Label>
                              <Input
                                value={section.title}
                                onChange={(e) => handleDescriptionTitleChange(index, e.target.value)}
                                placeholder="e.g., Overview, Features, Specifications..."
                                className="font-semibold"
                              />
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveDescriptionSection(index)}
                              className="ml-4 text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <Label>Description</Label>
                          <Textarea
                            value={section.content}
                            onChange={(e) => handleDescriptionContentChange(index, e.target.value)}
                            placeholder="Enter detailed description for this section..."
                            rows={4}
                          />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
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
                      placeholder="e.g., security fencing, metal fence, perimeter barrier"
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

                      {/* BIM Objects Content */}
                      {tab.type === 'bimObjects' && (() => {
                        // Parse content to object
                        let contentObj: { title?: string; description?: string; files?: any[] } = {};
                        if (typeof tab.content === 'string' && tab.content.trim().startsWith('{')) {
                          try {
                            contentObj = JSON.parse(tab.content);
                          } catch {
                            contentObj = { title: '', description: tab.content, files: [] };
                          }
                        } else if (typeof tab.content === 'object' && tab.content !== null) {
                          contentObj = tab.content;
                        } else if (typeof tab.content === 'string') {
                          contentObj = { title: '', description: tab.content, files: [] };
                        } else {
                          contentObj = { title: '', description: '', files: [] };
                        }
                        
                        return (
                        <div className="space-y-4">
                          {/* Title Input */}
                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={contentObj.title || ''}
                              onChange={(e) => {
                                handleTabContentChange(tab.id, JSON.stringify({ ...contentObj, title: e.target.value }));
                              }}
                              placeholder="Enter BIM Objects title..."
                            />
                          </div>

                          {/* Description */}
                          <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                              value={contentObj.description || ''}
                              onChange={(e) => {
                                handleTabContentChange(tab.id, JSON.stringify({ ...contentObj, description: e.target.value }));
                              }}
                              placeholder="Enter information about BIM objects, CAD files, and Revit files..."
                              rows={4}
                            />
                          </div>

                          {/* File Upload for DOCX/PDF */}
                          <div className="space-y-3 border rounded-lg p-4 bg-muted/30">
                            <div className="flex items-center justify-between">
                              <Label className="flex items-center gap-2">
                                <Upload className="h-4 w-4" />
                                Documents (DOCX, PDF)
                              </Label>
                              <span className="text-xs text-muted-foreground">
                                {(contentObj.files || []).length} / 5 files
                              </span>
                            </div>

                            {/* Show existing files */}
                            {(contentObj.files || []).length > 0 && (
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {(contentObj.files || []).map((file: any, fileIndex: number) => (
                                  <div key={`bim-file-${fileIndex}`} className="relative group">
                                    <div className="aspect-square rounded-lg border overflow-hidden bg-muted flex items-center justify-center">
                                      <div className="text-center p-2">
                                        <FileText className="h-8 w-8 mx-auto text-muted-foreground mb-1" />
                                        <p className="text-xs text-muted-foreground truncate px-1">{file.name || 'File'}</p>
                                        <p className="text-xs text-muted-foreground">{file.type?.toUpperCase() || 'PDF'}</p>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const newFiles = (contentObj.files || []).filter((_: any, i: number) => i !== fileIndex);
                                        handleTabContentChange(tab.id, JSON.stringify({ ...contentObj, files: newFiles }));
                                      }}
                                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                    >
                                      <X className="h-3 w-3" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* File upload button */}
                            {(contentObj.files || []).length < 5 && (
                              <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors bg-background">
                                <Upload className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Upload DOCX or PDF</span>
                                <input
                                  type="file"
                                  className="hidden"
                                  accept=".docx,.pdf"
                                  onChange={async (e) => {
                                    const files = e.target.files;
                                    if (!files || files.length === 0) return;
                                    
                                    const fileArray = Array.from(files).slice(0, 5);
                                    const uploadedUrls = await uploadImagesToCloudinary(fileArray);
                                    
                                    const newFiles = fileArray.map((file, index) => ({
                                      url: uploadedUrls[index],
                                      name: file.name,
                                      type: file.name.endsWith('.pdf') ? 'pdf' : 'docx',
                                    }));
                                    
                                    handleTabContentChange(tab.id, JSON.stringify({
                                      ...contentObj,
                                      files: [...(contentObj.files || []), ...newFiles],
                                    }));
                                  }}
                                />
                              </label>
                            )}
                          </div>
                        </div>
                      );
                      })()}

                      {/* Custom Content */}
                      {tab.type === 'custom' && (
                        <div className="space-y-2">
                          <Label>Custom Content</Label>
                          <Textarea
                            value={typeof tab.content === 'string' ? tab.content : ''}
                            onChange={(e) => handleTabContentChange(tab.id, e.target.value)}
                            placeholder="Enter custom content for this tab..."
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

      {/* Add Category Dialog */}
      <Dialog open={isAddCategoryOpen} onOpenChange={setIsAddCategoryOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
            <DialogDescription>
              Enter a name for the new product category
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newCategory">Category Name *</Label>
              <Input
                id="newCategory"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Enter category name"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddCategory();
                  }
                }}
                autoFocus
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsAddCategoryOpen(false);
                  setNewCategoryName("");
                }}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleAddCategory}
                className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
              >
                Add Category
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
