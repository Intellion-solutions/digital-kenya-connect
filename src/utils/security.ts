
import { useToast } from "@/hooks/use-toast";

// CSRF Token management
export class CSRFManager {
  private static token: string | null = null;
  
  static generateToken(): string {
    const token = btoa(Math.random().toString(36).substring(2) + Date.now().toString(36));
    this.token = token;
    localStorage.setItem('csrf_token', token);
    return token;
  }
  
  static getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('csrf_token');
    }
    return this.token;
  }
  
  static validateToken(token: string): boolean {
    const storedToken = this.getToken();
    return storedToken === token;
  }
  
  static clearToken(): void {
    this.token = null;
    localStorage.removeItem('csrf_token');
  }
}

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
};

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

// Rate limiting
export class RateLimiter {
  private static attempts: Map<string, number[]> = new Map();
  
  static checkRateLimit(identifier: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove attempts outside the time window
    const validAttempts = attempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    return true;
  }
}

// XSS Prevention
export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Content Security Policy headers
export const CSP_HEADERS = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:;"
};

// Security validation for forms
export const validateFormData = (data: Record<string, any>): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Check for empty required fields
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string' && value.trim() === '') {
      errors.push(`${key} is required`);
    }
  });
  
  // Validate email if present
  if (data.email && !validateEmail(data.email)) {
    errors.push('Invalid email format');
  }
  
  // Validate phone if present
  if (data.phone && !validatePhone(data.phone)) {
    errors.push('Invalid phone format');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Session management
export class SessionManager {
  private static readonly SESSION_KEY = 'app_session';
  private static readonly SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  
  static createSession(userData: any): void {
    const session = {
      user: userData,
      timestamp: Date.now(),
      csrfToken: CSRFManager.generateToken()
    };
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
  }
  
  static getSession(): any | null {
    const sessionData = localStorage.getItem(this.SESSION_KEY);
    if (!sessionData) return null;
    
    try {
      const session = JSON.parse(sessionData);
      const now = Date.now();
      
      // Check if session is expired
      if (now - session.timestamp > this.SESSION_TIMEOUT) {
        this.clearSession();
        return null;
      }
      
      return session;
    } catch {
      this.clearSession();
      return null;
    }
  }
  
  static clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
    CSRFManager.clearToken();
  }
  
  static isSessionValid(): boolean {
    const session = this.getSession();
    return session !== null;
  }
}

// Secure API request wrapper
export const secureApiRequest = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const csrfToken = CSRFManager.getToken();
  
  const headers = {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken || '',
    ...options.headers
  };
  
  return fetch(url, {
    ...options,
    headers,
    credentials: 'same-origin'
  });
};
