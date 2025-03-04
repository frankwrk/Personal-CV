import React from 'react';
import TerminalUIShowcase from '@/components/TerminalUIShowcase';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import * as Icons from '@radix-ui/react-icons';

// Explicitly define the icons we need
const { CodeIcon: TerminalIcon } = Icons;
import '../new-york-theme.css';

export default function TerminalUIPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/new-york-demo" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-4 w-4" /> Back to Demo
          </Link>
        </Button>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-4">
            <TerminalIcon className="mr-3 w-8 h-8 accent-element" />
            <h1 className="heading-1 text-foreground">Terminal UI</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            A showcase of terminal-inspired UI components with glass-morphism effects and gold/amber accents
          </p>
        </div>
        
        <div className="border-b border-border my-6"></div>
        
        <div className="prompt p-4 mb-6">
          <code className="text-sm">
            $ ./showcase-terminal-ui.sh<br />
            Loading components...<br />
            Initializing UI elements...<br />
            <span className="accent-element">Ready to explore terminal-inspired design patterns</span>
            <span className="cursor-blink ml-1">|</span>
          </code>
        </div>
        
        <TerminalUIShowcase />
      </div>
    </div>
  );
}
