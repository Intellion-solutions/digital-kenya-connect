
import { useState, useCallback } from 'react';
import { CSRFManager, validateFormData, RateLimiter, sanitizeInput } from '@/utils/security';
import { useToast } from "@/hooks/use-toast";

interface UseSecureFormOptions {
  onSubmit: (data: Record<string, any>) => Promise<void> | void;
  requiredFields?: string[];
  rateLimitKey?: string;
  maxAttempts?: number;
}

export const useSecureForm = ({
  onSubmit,
  requiredFields = [],
  rateLimitKey = 'default',
  maxAttempts = 5
}: UseSecureFormOptions) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Generate CSRF token on form initialization
  const csrfToken = CSRFManager.getToken() || CSRFManager.generateToken();

  const updateField = useCallback((field: string, value: any) => {
    // Sanitize string inputs
    const sanitizedValue = typeof value === 'string' ? sanitizeInput(value) : value;
    
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  const validateForm = useCallback(() => {
    const validation = validateFormData(formData);
    const fieldErrors: Record<string, string> = {};
    
    // Check required fields
    requiredFields.forEach(field => {
      if (!formData[field] || (typeof formData[field] === 'string' && formData[field].trim() === '')) {
        fieldErrors[field] = `${field} is required`;
      }
    });
    
    // Add validation errors
    validation.errors.forEach(error => {
      const field = error.split(' ')[0].toLowerCase();
      fieldErrors[field] = error;
    });
    
    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  }, [formData, requiredFields]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    // Rate limiting check
    if (!RateLimiter.checkRateLimit(rateLimitKey, maxAttempts)) {
      toast({
        title: "Too Many Attempts",
        description: "Please wait before trying again.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate CSRF token
    if (!CSRFManager.validateToken(csrfToken)) {
      toast({
        title: "Security Error",
        description: "Invalid security token. Please refresh the page.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors below.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await onSubmit({
        ...formData,
        _token: csrfToken,
        _timestamp: Date.now()
      });
      
      toast({
        title: "Success",
        description: "Form submitted successfully!",
      });
      
      // Reset form
      setFormData({});
      setErrors({});
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "An error occurred while submitting the form.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, csrfToken, onSubmit, validateForm, rateLimitKey, maxAttempts, toast]);

  const reset = useCallback(() => {
    setFormData({});
    setErrors({});
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    updateField,
    handleSubmit,
    reset,
    csrfToken
  };
};
