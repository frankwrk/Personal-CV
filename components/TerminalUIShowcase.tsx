"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/contexts/ThemeContext';
import * as Icons from '@radix-ui/react-icons';

// Explicitly define the icons we need
const {
  CodeIcon: TerminalIcon,
  CopyIcon,
  CheckIcon,
  GitHubLogoIcon,
  MoonIcon,
  SunIcon,
  GlobeIcon,
  DownloadIcon
} = Icons;

const TerminalCommand = ({ command, output }: { command: string; output: string }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <div className="prompt p-3 rounded-md font-mono text-sm flex-1 overflow-x-auto">
          <span className="text-highlight mr-2">$</span> {command}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-2" 
          onClick={copyToClipboard}
          title="Copy to clipboard"
        >
          {copied ? 
            <CheckIcon className="h-4 w-4 text-highlight" /> : 
            <CopyIcon className="h-4 w-4" />
          }
        </Button>
      </div>
      {output && (
        <div className="pl-4 ml-2 border-l-2 border-border font-mono text-xs text-muted-foreground">
          {output.split('\n').map((line, i) => (
            <div key={i} className="py-0.5">{line}</div>
          ))}
        </div>
      )}
    </div>
  );
};

const GlassCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="glass-card p-5 rounded-lg mb-6">
      <h3 className="heading-3 mb-3 accent-element">{title}</h3>
      {children}
    </div>
  );
};

export const TerminalUIShowcase = () => {
  const { theme, setTheme } = useTheme();
  const [terminalInput, setTerminalInput] = useState('');
  
  return (
    <div className="space-y-8 py-6">
      <section>
        <h2 className="heading-2 mb-4 flex items-center">
          <TerminalIcon className="mr-2 h-5 w-5 accent-element" />
          Terminal-Inspired UI Elements
        </h2>
        <p className="body mb-6">
          This showcases the terminal-inspired UI elements with gold/amber accents,
          combining the editorial refinement of the New York style with technical aesthetics.
        </p>
      </section>
      
      <GlassCard title="Command-Line Interface">
        <TerminalCommand 
          command="npm install @radix-ui/react-icons framer-motion" 
          output="added 28 packages, and audited 568 packages in 3.5s\n\n14 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities" 
        />
        
        <TerminalCommand 
          command="git commit -m 'feat: add terminal-inspired theme'" 
          output="[main 42a5f87] feat: add terminal-inspired theme\n 5 files changed, 253 insertions(+), 87 deletions(-)" 
        />
        
        <div className="mt-4 flex items-center">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Type a command..."
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              className="pl-8 font-mono"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-highlight">$</span>
          </div>
          <Button className="ml-2" size="sm">Execute</Button>
        </div>
      </GlassCard>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard title="GitHub Stats">
          <div className="flex items-center mb-3">
            <GitHubLogoIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">github.com/username</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Repositories</span>
              <span className="font-medium accent-element">36</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Stars</span>
              <span className="font-medium accent-element">248</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Followers</span>
              <span className="font-medium accent-element">73</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Contributions (last year)</span>
              <span className="font-medium accent-element">1,274</span>
            </div>
          </div>
        </GlassCard>
        
        <GlassCard title="Theme Controls">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <SunIcon className="h-4 w-4 mr-2" />
                Light Mode
              </span>
              <Button 
                variant={theme === 'light' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setTheme('light')}
                className={theme === 'light' ? 'accent-element' : ''}
              >
                Active
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <MoonIcon className="h-4 w-4 mr-2" />
                Dark Mode
              </span>
              <Button 
                variant={theme === 'dark' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setTheme('dark')}
                className={theme === 'dark' ? 'accent-element' : ''}
              >
                Active
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <GlobeIcon className="h-4 w-4 mr-2" />
                System Preference
              </span>
              <Button 
                variant={theme === 'system' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setTheme('system')}
                className={theme === 'system' ? 'accent-element' : ''}
              >
                Active
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
      
      <GlassCard title="Download Stats">
        <div className="flex items-center mb-4">
          <DownloadIcon className="h-5 w-5 mr-2 accent-element" />
          <span className="font-medium">Project Downloads</span>
        </div>
        
        <div className="space-y-3">
          {[
            { month: 'January', count: 12543 },
            { month: 'February', count: 15789 },
            { month: 'March', count: 18234 },
            { month: 'April', count: 21567 }
          ].map((stat) => (
            <div key={stat.month} className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-muted-foreground">
                    {stat.month}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block accent-element">
                    {stat.count.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-muted">
                <div
                  style={{ width: `${(stat.count / 25000) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default TerminalUIShowcase;
