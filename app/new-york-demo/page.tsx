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
    <div className="container mx-auto px-4 py-8 max-w-5xl bg-gray-950 text-gray-200">
      <div className="flex items-center mb-8">
        <TerminalIcon className="mr-3 w-8 h-8 text-amber-500" />
        <h1 className="text-2xl font-bold text-white">Terminal <span className="text-amber-400">UI</span> System</h1>
      </div>
      
      <div className="mb-8">
        <div className="bg-gray-900 border border-amber-500/20 p-4 mb-6 rounded-xs">
          <code className="text-sm text-gray-300 font-mono">$ welcome to the <span className="text-amber-400">terminal UI</span> showcase_<span className="cursor-blink"></span></code>
        </div>
        
        <p className="text-lg mb-4 text-gray-300 leading-relaxed">
          This showcase presents a clean, modern terminal-inspired UI system with strategic amber accents.
          The design balances technical precision with contemporary aesthetics, creating an interface
          that's both functional and visually appealing.
        </p>

        <div className="my-6 flex justify-end gap-3">
          <Button asChild className="flex items-center gap-2 bg-amber-600 text-gray-950 hover:bg-amber-500">
            <Link href="/terminal-ui">
              <TerminalIcon className="w-4 h-4" /> Terminal UI <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center gap-2 border-gray-700 text-white hover:bg-gray-800 hover:border-amber-500/50">
            <Link href="/color-palette">
              <ColorWheelIcon className="w-4 h-4" /> Color Palette <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        
        <p className="mb-4 text-white font-medium">
          Key Features
        </p>
        
        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-300">
          <li>
            Deep space-inspired backgrounds with <span className="text-amber-400">strategic amber accents</span>
          </li>
          <li>
            Modern typography with monospace highlights for technical content
          </li>
          <li>
            Refined glass-morphism effects with subtle backdrop blur
          </li>
          <li>
            Accessible color contrast following WCAG standards
          </li>
          <li>
            Interactive elements with purposeful transitions and feedback
          </li>
        </ul>
        
        <div className="bg-gray-900/80 backdrop-blur-xs border border-gray-800 p-6 mb-6 rounded-sm shadow-sm">
          <p className="text-xl font-medium mb-3 text-white">Design Philosophy</p>
          <div className="w-16 h-1 bg-amber-500 mb-4"></div>
          <p className="text-gray-300 leading-relaxed">
            Our approach merges the clarity of terminal interfaces with modern design principles.
            We've carefully balanced technical aesthetics with contemporary UX patterns to create
            a system that feels both familiar to developers and accessible to all users.
            The restrained use of amber accents creates visual interest without overwhelming
            the interface.
          </p>
        </div>
      </div>
      
      <NewYorkShowcase />
    </div>
  );
}