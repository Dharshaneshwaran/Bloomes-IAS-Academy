import { api } from '../api';
import { Achievement, Testimonial, ApiResponse } from '@/types';

export const achievementService = {
  // Get all achievements
  getAllAchievements: async (): Promise<ApiResponse<Achievement[]>> => {
    try {
      const response = await api.get<ApiResponse<Achievement[]>>('/achievements');
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch achievements',
      };
    }
  },

  // Get rank holders
  getRankHolders: async (): Promise<ApiResponse<any[]>> => {
    try {
      const response = await api.get<ApiResponse<any[]>>('/achievements/rank-holders');
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch rank holders',
      };
    }
  },

  // Get all testimonials
  getAllTestimonials: async (): Promise<ApiResponse<Testimonial[]>> => {
    try {
      const response = await api.get<ApiResponse<Testimonial[]>>('/testimonials');
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch testimonials',
      };
    }
  },

  // Submit testimonial
  submitTestimonial: async (testimonialData: Partial<Testimonial>): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>('/testimonials', testimonialData);
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to submit testimonial',
      };
    }
  },
};
