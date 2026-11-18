import { api } from '../api';
import { Course, ApiResponse } from '@/types';

export const courseService = {
  // Get all courses
  getAllCourses: async (): Promise<ApiResponse<Course[]>> => {
    try {
      const response = await api.get<ApiResponse<Course[]>>('/courses');
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch courses',
      };
    }
  },

  // Get courses by category
  getCoursesByCategory: async (category: string): Promise<ApiResponse<Course[]>> => {
    try {
      const response = await api.get<ApiResponse<Course[]>>(`/courses/category/${category}`);
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch courses',
      };
    }
  },

  // Get course by ID
  getCourseById: async (id: string): Promise<ApiResponse<Course>> => {
    try {
      const response = await api.get<ApiResponse<Course>>(`/courses/${id}`);
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch course details',
      };
    }
  },

  // Enroll in course
  enrollCourse: async (courseId: string, studentData: any): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post<ApiResponse<any>>(`/courses/${courseId}/enroll`, studentData);
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to enroll in course',
      };
    }
  },
};
