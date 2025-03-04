"use client";

import { useState, useEffect } from 'react';

interface UseGitHubAvatarResult {
  isLoading: boolean;
  error: Error | null;
  avatarUrl: string | null;
  faviconUrl: string | null;
  refreshAvatar: () => Promise<void>;
}

/**
 * Hook to fetch and update GitHub avatar and favicon
 * @param username GitHub username
 * @returns Result object with loading state, error, URLs, and refresh function
 */
export function useGitHubAvatar(username: string): UseGitHubAvatarResult {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);

  const refreshAvatar = async () => {
    if (!username) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/github-avatar?username=${encodeURIComponent(username)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch GitHub avatar');
      }
      
      const data = await response.json();
      
      setAvatarUrl(data.avatarUrl);
      setFaviconUrl(data.faviconUrl);
      
      // Update favicon in the document
      if (data.faviconUrl && typeof document !== 'undefined') {
        const linkElements = document.querySelectorAll('link[rel*="icon"]');
        
        // Remove existing favicon links
        linkElements.forEach(element => {
          element.parentNode?.removeChild(element);
        });
        
        // Add new favicon link
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = data.faviconUrl + '?v=' + new Date().getTime(); // Cache busting
        document.head.appendChild(newLink);
      }
    } catch (err) {
      console.error('Error in useGitHubAvatar:', err);
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshAvatar();
  }, [username]);

  return {
    isLoading,
    error,
    avatarUrl,
    faviconUrl,
    refreshAvatar
  };
}
