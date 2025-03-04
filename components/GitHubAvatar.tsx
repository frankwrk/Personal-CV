"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchGitHubProfile, type GitHubProfile } from "@/lib/github";
import { cn } from "@/lib/utils";

interface GitHubAvatarProps {
  username: string;
  className?: string;
  fallback?: string;
}

export default function GitHubAvatar({ username, className, fallback }: GitHubAvatarProps) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        setIsLoading(true);
        const data = await fetchGitHubProfile(username);
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        console.error("Failed to load GitHub profile:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProfile();
  }, [username]);

  // Generate fallback initials from username
  const initials = username
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="group">
      <Avatar 
        className={cn(
          "rounded-full overflow-hidden",
          className
        )} 
        data-oid="github-avatar"
      >
        {profile?.avatar_url && (
          <AvatarImage
            src={profile.avatar_url}
            alt={`${username}'s GitHub avatar`}
            data-oid="github-avatar-img"
          />
        )}
        <AvatarFallback data-oid="github-avatar-fallback">
          {isLoading ? "..." : fallback || initials}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
