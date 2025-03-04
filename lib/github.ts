/**
 * Utility function to fetch GitHub profile information
 */

export interface GitHubProfile {
  avatar_url: string;
  name: string | null;
  login: string;
}

/**
 * Fetches a GitHub user's profile information
 * @param username The GitHub username to fetch
 * @returns Promise with GitHub profile data
 */
export async function fetchGitHubProfile(username: string): Promise<GitHubProfile> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      // Adding cache control to respect GitHub's rate limits but still refresh periodically
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    // Return a default profile in case of error
    return {
      avatar_url: '/placeholder.svg?height=48&width=48',
      name: null,
      login: username
    };
  }
}

/**
 * Downloads and saves a GitHub avatar to the public directory
 * @param username The GitHub username
 * @param avatarUrl The avatar URL to download
 */
export async function downloadGitHubAvatar(username: string, avatarUrl: string): Promise<string> {
  // In a server component or API route, you would implement the download logic here
  // For the client-side component, we'll just return the URL
  return avatarUrl;
}
