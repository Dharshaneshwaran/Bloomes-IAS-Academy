import { api } from '../api';
import { ContactForm, ApiResponse } from '@/types';

export const contactService = {
  // Submit contact form
  submitContactForm: async (formData: ContactForm): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>('/contact', formData);
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to submit contact form',
      };
    }
  },

  // Request callback
  requestCallback: async (data: { name: string; phone: string; course?: string }): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>('/contact/callback', data);
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to request callback',
      };
    }
  },

  // Subscribe to newsletter
  subscribeNewsletter: async (email: string): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>('/newsletter/subscribe', { email });
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to subscribe to newsletter',
      };
    }
  },
};
