// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top when page loads or changes
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  // Also force scroll to top on first load
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 0);
  }, []);

  return null;
}
