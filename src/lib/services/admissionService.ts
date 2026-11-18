import { api } from '../api';
import { ApiResponse } from '@/types';

interface AdmissionFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  qualification: string;
  courseId: string;
  preferredBatch?: string;
  previousAttempts?: number;
}

export const admissionService = {
  // Submit admission form
  submitAdmission: async (formData: AdmissionFormData): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>('/admissions', formData);
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to submit admission form',
      };
    }
  },

  // Get admission status
  getAdmissionStatus: async (applicationId: string): Promise<ApiResponse<any>> => {
    try {
      const response = await api.get<ApiResponse<any>>(`/admissions/${applicationId}/status`);
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch admission status',
      };
    }
  },

  // Upload documents
  uploadDocuments: async (applicationId: string, documents: FormData): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>(
        `/admissions/${applicationId}/documents`,
        documents,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to upload documents',
      };
    }
  },

  // Schedule counseling session
  scheduleCounseling: async (data: {
    name: string;
    email: string;
    phone: string;
    preferredDate: string;
    preferredTime: string;
  }): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>('/admissions/counseling', data);
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to schedule counseling',
      };
    }
  },
};
