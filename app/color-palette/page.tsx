import React from 'react';
import ColorPaletteShowcase from '@/components/ColorPaletteShowcase';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function ColorPalettePage() {
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
          <h1 className="heading-1 text-foreground mb-2">Color Palette</h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of the terminal-inspired color palette with gold/amber accents
          </p>
        </div>
        
        <div className="border-b border-border my-6" />
        
        <ColorPaletteShowcase />
      </div>
    </div>
  );
}
