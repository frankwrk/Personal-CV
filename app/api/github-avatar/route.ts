import { NextResponse } from 'next/server';
import path from 'path';
import { writeFile } from 'fs/promises';
import { GitHubProfile, fetchGitHubProfile } from '@/lib/github';

export async function GET(request: Request) {
  try {
    // Get username from query params
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    
    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' }, 
        { status: 400 }
      );
    }
    
    // Fetch GitHub profile
    const profile: GitHubProfile = await fetchGitHubProfile(username);
    
    if (!profile.avatar_url) {
      return NextResponse.json(
        { error: 'Avatar URL not found' },
        { status: 404 }
      );
    }
    
    // Download the avatar image
    const avatarResponse = await fetch(profile.avatar_url);
    if (!avatarResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to download avatar' },
        { status: 500 }
      );
    }
    
    // Get the image data
    const avatarBuffer = await avatarResponse.arrayBuffer();
    
    // Save the avatar as favicon.ico in the public directory
    const publicDir = path.join(process.cwd(), 'public');
    const faviconPath = path.join(publicDir, 'favicon.ico');
    const avatarPath = path.join(publicDir, 'github-avatar.png');
    
    await writeFile(avatarPath, Buffer.from(avatarBuffer));
    
    // For favicon.ico, we use the same image
    // In a production app, you might want to convert it to .ico format
    await writeFile(faviconPath, Buffer.from(avatarBuffer));
    
    return NextResponse.json({ 
      message: 'Avatar downloaded successfully',
      avatarUrl: '/github-avatar.png',
      faviconUrl: '/favicon.ico'
    });
  } catch (error) {
    console.error('Error in GitHub avatar API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
