import { useState, useCallback } from 'react';

/**
 * Custom hook for error handling
 * @returns {Object} error state and functions to handle errors
 */
export function useError() {
  const [error, setError] = useState(null);

  const handleError = useCallback((error) => {
    console.error('Application Error:', error);
    setError(error.message || 'An unexpected error occurred');
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError,
    hasError: error !== null
  };
}

/**
 * Custom hook for loading states
 * @returns {Object} loading state and functions to control it
 */
export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    startLoading,
    stopLoading
  };
}
