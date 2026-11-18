import { api } from '../api';
import { ApiResponse } from '@/types';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export const authService = {
  // Login
  login: async (credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> => {
    try {
      const response = await api.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
      
      if (response.success && response.data) {
        // Store token in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('authToken', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
      }
      
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed',
      };
    }
  },

  // Register
  register: async (data: RegisterData): Promise<ApiResponse<AuthResponse>> => {
    try {
      const response = await api.post<ApiResponse<AuthResponse>>('/auth/register', data);
      
      if (response.success && response.data) {
        // Store token in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('authToken', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
      }
      
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Registration failed',
      };
    }
  },

  // Logout
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  },

  // Get current user
  getCurrentUser: () => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  },

  // Check if authenticated
  isAuthenticated: (): boolean => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('authToken');
    }
    return false;
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>('/auth/forgot-password', { email });
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to send reset email',
      };
    }
  },

  // Reset password
  resetPassword: async (token: string, newPassword: string): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>('/auth/reset-password', {
        token,
        password: newPassword,
      });
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to reset password',
      };
    }
  },
};
