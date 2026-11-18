import { AxiosError } from 'axios';

export interface ErrorResponse {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}

/**
 * Extract error message from different error types
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    // Axios error with response
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
    
    // Axios error without response
    if (error.message) {
      return error.message;
    }
  }
  
  // Generic Error object
  if (error instanceof Error) {
    return error.message;
  }
  
  // String error
  if (typeof error === 'string') {
    return error;
  }
  
  // Unknown error type
  return 'An unexpected error occurred';
};

/**
 * Parse validation errors from API response
 */
export const parseValidationErrors = (error: unknown): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  if (error instanceof AxiosError) {
    const validationErrors = error.response?.data?.errors;
    
    if (validationErrors && typeof validationErrors === 'object') {
      Object.keys(validationErrors).forEach((key) => {
        const messages = validationErrors[key];
        if (Array.isArray(messages) && messages.length > 0) {
          errors[key] = messages[0];
        }
      });
    }
  }
  
  return errors;
};

/**
 * Check if error is a network error
 */
export const isNetworkError = (error: unknown): boolean => {
  if (error instanceof AxiosError) {
    return !error.response && Boolean(error.request);
  }
  return false;
};

/**
 * Check if error is an authentication error
 */
export const isAuthError = (error: unknown): boolean => {
  if (error instanceof AxiosError) {
    return error.response?.status === 401;
  }
  return false;
};

/**
 * Log error to console (can be extended to send to error tracking service)
 */
export const logError = (error: unknown, context?: string): void => {
  const message = getErrorMessage(error);
  const timestamp = new Date().toISOString();
  
  console.error(`[${timestamp}] ${context ? `${context}: ` : ''}${message}`);
  
  // In production, you might want to send errors to a tracking service
  // Example: Sentry, LogRocket, etc.
  if (process.env.NODE_ENV === 'production') {
    // sendToErrorTracking(error, context);
  }
};
