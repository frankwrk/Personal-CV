import React from 'react';
import { NewYorkShowcase } from '@/components/NewYorkShowcase';
import * as Icons from '@radix-ui/react-icons';
import '../new-york-theme.css';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Explicitly define the icons we need
const { ColorWheelIcon, ChevronRightIcon, CodeIcon: TerminalIcon } = Icons;

export default function NewYorkDemo() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex items-center mb-8">
        <TerminalIcon className="mr-3 w-8 h-8 accent-element" />
        <h1 className="display-2">New York <span className="accent-element">Terminal</span> Theme</h1>
      </div>
      
      <div className="mb-8">
        <div className="prompt p-4 mb-6">
          <code className="text-sm">Welcome to the New York Terminal Theme Demo...</code>
          <span className="cursor-blink ml-1">|</span>
        </div>
        
        <p className="body-lg mb-4">
          This page showcases our New York style variant enhanced with terminal-inspired gold/amber 
          accents for a sophisticated tech aesthetic. The combination creates a premium, modern UI 
          experience perfect for developer-focused applications and professional portfolios.
        </p>

        <div className="my-6 flex justify-end gap-3">
          <Button asChild className="flex items-center gap-2">
            <Link href="/terminal-ui">
              <TerminalIcon className="w-4 h-4" /> Terminal UI <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/color-palette">
              <ColorWheelIcon className="w-4 h-4" /> Color Palette <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        
        <p className="body mb-2">
          Key features of the <span className="accent-element">Terminal</span> aesthetic include:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li className="body">
            Deep charcoal backgrounds with <span className="accent-element">gold/amber accents</span>
          </li>
          <li className="body">
            Terminal-inspired command prompts and code blocks
          </li>
          <li className="body">
            Glass-morphism cards with subtle backdrop blur
          </li>
          <li className="body">
            Monospace font highlights for technical content
          </li>
          <li className="body">
            Interactive elements with subtle animations and transitions
          </li>
        </ul>
        
        <div className="card glass-card p-5 mb-6">
          <p className="heading-3 mb-2 accent-element">Design Philosophy</p>
          <p className="body-sm">
            Inspired by modern developer tools and command-line interfaces, this theme 
            combines the editorial refinement of New York style with the technical sophistication 
            of terminal UIs. It's designed for readability, focus, and a premium aesthetic that 
            stands out while maintaining professional clarity.
          </p>
        </div>
      </div>
      
      <NewYorkShowcase />
    </div>
  );
}
