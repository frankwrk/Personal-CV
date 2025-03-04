import React from 'react';
import { NewYorkShowcase } from '@/components/NewYorkShowcase';

export default function NewYorkDemo() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="display-2 mb-8">New York Style Theme</h1>
      
      <div className="mb-8">
        <p className="body-lg mb-4">
          This page demonstrates the New York style variant from Shadcn/UI with additional 
          Apple-inspired design enhancements. The New York style features slightly sharper
          corners, refined typography, and subtle design elements that create a sophisticated
          and editorial aesthetic.
        </p>
        
        <p className="body mb-2">
          Key characteristics of the New York style include:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li className="body">
            Slightly sharper corners (0.4rem instead of 0.5rem)
          </li>
          <li className="body">
            More refined shadows and hover effects
          </li>
          <li className="body">
            Occasional serif accent typography
          </li>
          <li className="body">
            Subtle gradient effects on interactive elements
          </li>
          <li className="body">
            Focus on typographic hierarchy and spacing
          </li>
        </ul>
      </div>
      
      <NewYorkShowcase />
    </div>
  );
}
