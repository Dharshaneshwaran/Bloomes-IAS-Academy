# API Integration Guide

## Overview

This document describes the API integration setup for Blooms Academy frontend application.

## Configuration

### Environment Variables

Configure the backend API URL in `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## API Client

The application uses Axios for HTTP requests with the following features:

- **Base URL Configuration**: Automatically uses the API URL from environment variables
- **Request Interceptors**: Automatically adds authentication tokens to requests
- **Response Interceptors**: Handles common errors (401, 403, 404, 500)
- **Timeout**: 30 seconds default timeout for all requests
- **Error Handling**: Comprehensive error handling with user-friendly messages

## Available Services

### 1. Contact Service (`contactService`)

Handle contact form submissions and communication:

```typescript
import { contactService } from '@/lib/services';

// Submit contact form
const result = await contactService.submitContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '9876543210',
  course: 'UPSC Foundation',
  message: 'I want more information',
});

// Request callback
await contactService.requestCallback({
  name: 'John Doe',
  phone: '9876543210',
  course: 'UPSC Foundation',
});

// Subscribe to newsletter
await contactService.subscribeNewsletter('john@example.com');
```

### 2. Course Service (`courseService`)

Manage course data and enrollments:

```typescript
import { courseService } from '@/lib/services';

// Get all courses
const courses = await courseService.getAllCourses();

// Get courses by category
const upscCourses = await courseService.getCoursesByCategory('UPSC');

// Get single course
const course = await courseService.getCourseById('1');

// Enroll in course
await courseService.enrollCourse('1', {
  studentName: 'John Doe',
  email: 'john@example.com',
  phone: '9876543210',
});
```

### 3. Achievement Service (`achievementService`)

Fetch achievements and testimonials:

```typescript
import { achievementService } from '@/lib/services';

// Get all achievements
const achievements = await achievementService.getAllAchievements();

// Get rank holders
const rankHolders = await achievementService.getRankHolders();

// Get testimonials
const testimonials = await achievementService.getAllTestimonials();

// Submit testimonial
await achievementService.submitTestimonial({
  name: 'John Doe',
  rank: 'AIR 45',
  text: 'Great coaching!',
  rating: 5,
});
```

### 4. Admission Service (`admissionService`)

Handle admission applications:

```typescript
import { admissionService } from '@/lib/services';

// Submit admission form
const result = await admissionService.submitAdmission({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '9876543210',
  dateOfBirth: '2000-01-01',
  gender: 'Male',
  address: '123 Street',
  city: 'Chennai',
  state: 'Tamil Nadu',
  pincode: '600001',
  qualification: 'Graduate',
  courseId: '1',
});

// Check admission status
const status = await admissionService.getAdmissionStatus('APP123');

// Upload documents
const formData = new FormData();
formData.append('document', file);
await admissionService.uploadDocuments('APP123', formData);

// Schedule counseling
await admissionService.scheduleCounseling({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '9876543210',
  preferredDate: '2025-01-20',
  preferredTime: '10:00 AM',
});
```

### 5. Auth Service (`authService`)

Authentication and user management:

```typescript
import { authService } from '@/lib/services';

// Login
const result = await authService.login({
  email: 'john@example.com',
  password: 'password123',
});

// Register
await authService.register({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '9876543210',
  password: 'password123',
});

// Logout
authService.logout();

// Get current user
const user = authService.getCurrentUser();

// Check if authenticated
const isAuth = authService.isAuthenticated();

// Forgot password
await authService.forgotPassword('john@example.com');

// Reset password
await authService.resetPassword('reset-token', 'newPassword123');
```

## Error Handling

All services return an `ApiResponse` type with consistent structure:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
```

Example usage with error handling:

```typescript
const result = await contactService.submitContactForm(formData);

if (result.success) {
  // Handle success
  console.log('Form submitted successfully');
  console.log(result.data);
} else {
  // Handle error
  console.error(result.error);
}
```

## Utility Functions

### Error Handling Utils

```typescript
import { getErrorMessage, parseValidationErrors, isNetworkError } from '@/lib';

// Get user-friendly error message
const message = getErrorMessage(error);

// Parse validation errors
const validationErrors = parseValidationErrors(error);

// Check if network error
if (isNetworkError(error)) {
  console.log('Network connection issue');
}
```

### Helper Functions

```typescript
import {
  formatCurrency,
  formatDate,
  formatPhoneNumber,
  isValidEmail,
  isValidPhoneNumber,
  debounce,
} from '@/lib';

// Format currency
const price = formatCurrency(150000); // ₹1,50,000

// Format date
const date = formatDate('2025-01-20'); // January 20, 2025

// Validate email
const valid = isValidEmail('john@example.com'); // true

// Debounce function
const debouncedSearch = debounce(searchFunction, 300);
```

## Backend API Requirements

For the frontend to work properly, the backend should implement the following endpoints:

### Contact Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/contact/callback` - Request callback
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

### Course Endpoints
- `GET /api/courses` - Get all courses
- `GET /api/courses/category/:category` - Get courses by category
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses/:id/enroll` - Enroll in course

### Achievement Endpoints
- `GET /api/achievements` - Get all achievements
- `GET /api/achievements/rank-holders` - Get rank holders
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Submit testimonial

### Admission Endpoints
- `POST /api/admissions` - Submit admission form
- `GET /api/admissions/:id/status` - Get admission status
- `POST /api/admissions/:id/documents` - Upload documents
- `POST /api/admissions/counseling` - Schedule counseling

### Auth Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

## Security Considerations

1. **Authentication**: JWT tokens are stored in localStorage and automatically added to requests
2. **HTTPS**: Always use HTTPS in production
3. **CORS**: Backend should configure CORS to allow requests from frontend domain
4. **Rate Limiting**: Backend should implement rate limiting
5. **Input Validation**: Both frontend and backend should validate user input

## Testing

To test API integration without backend:

1. Use mock data from `/src/data` folder
2. Comment out API calls in services temporarily
3. Return mock data directly from service functions

Example:
```typescript
getAllCourses: async () => {
  // return await api.get('/courses'); // Comment this
  return { success: true, data: courses }; // Return mock data
}
```

## Troubleshooting

### Common Issues

1. **CORS Error**: Check backend CORS configuration
2. **401 Unauthorized**: Token expired or invalid, clear localStorage
3. **Network Error**: Check if backend is running and API URL is correct
4. **Timeout**: Check backend response time, may need to increase timeout

### Debug Mode

Enable detailed logging by checking browser console. All errors are logged with context.
