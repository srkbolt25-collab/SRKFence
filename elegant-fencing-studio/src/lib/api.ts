// Use relative path for API calls in Next.js
const API_URL = typeof window !== 'undefined' ? '/api' : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

class ApiClient {
  private getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('admin_token');
    }
    return null;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = this.getToken();
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  }

  // Auth methods
  async login(email: string, password: string) {
    const response = await this.request<{
      token: string;
      user: { id: string; email: string; name: string; role: string };
    }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.token) {
      localStorage.setItem('admin_token', response.token);
      localStorage.setItem('admin_user', JSON.stringify(response.user));
    }

    return response;
  }

  async getCurrentUser() {
    return this.request<{
      user: { id: string; email: string; name: string; role: string };
    }>('/auth/me');
  }

  // Products methods
  async getProducts() {
    return this.request<{ products: any[] }>('/products');
  }

  async getProduct(id: string) {
    return this.request<any>(`/products/${id}`);
  }

  async createProduct(data: any) {
    return this.request('/products', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProduct(id: string, data: any) {
    return this.request(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteProduct(id: string) {
    return this.request(`/products/${id}`, {
      method: 'DELETE',
    });
  }

  // Testimonials methods
  async getTestimonials() {
    return this.request<{ testimonials: any[] }>('/testimonials');
  }

  async createTestimonial(data: any) {
    return this.request('/testimonials', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateTestimonial(id: string, data: any) {
    return this.request(`/testimonials/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteTestimonial(id: string) {
    return this.request(`/testimonials/${id}`, {
      method: 'DELETE',
    });
  }

  // Upload methods
  async uploadImages(files: File[], folder: string = 'products') {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });
    formData.append('folder', folder);

    const token = this.getToken();
    const headers: HeadersInit = {};

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Upload failed' }));
      throw new Error(error.error || 'Upload failed');
    }

    return response.json();
  }
}

export const apiClient = new ApiClient();

