
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import * as Icons from '@radix-ui/react-icons';

// Explicitly define the icons we need
const { CheckIcon, CrossCircledIcon, CodeIcon, CodeIcon: TerminalIcon } = Icons;

export function NewYorkShowcase() {
  return (
    <div className="space-y-10 py-8">
      <section>
        <h2 className="heading-1 mb-4">New York <span className="accent-element">Terminal</span> Theme</h2>
        <p className="body mb-6">
          This showcases the New York style with gold/amber terminal-inspired enhancements for a sophisticated tech aesthetic.
        </p>
        <div className="prompt mb-6 inline-flex items-center">
          <TerminalIcon className="mr-2" />
          <code>design:theme --apply="new-york-terminal"</code>
          <span className="cursor-blink ml-1">|</span>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h3 className="heading-2 mb-4">Terminal <span className="accent-element">Controls</span></h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" className="button-ny btn-gradient primary-btn">
              <CheckIcon className="mr-2" />
              Execute Command
            </Button>
            <Button variant="secondary" className="button-ny btn-gradient">
              <CodeIcon className="mr-2" />
              View Source
            </Button>
            <Button variant="outline" className="button-ny">
              <TerminalIcon className="mr-2" />
              Terminal
            </Button>
            <Button variant="ghost" className="button-ny">Settings</Button>
            <Button variant="destructive" className="button-ny btn-gradient">
              <CrossCircledIcon className="mr-2" />
              Abort Process
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="card highlight-card">
          <CardHeader>
            <CardTitle className="heading-2">Command <span className="accent-element">Output</span></CardTitle>
            <CardDescription className="body-sm">
              Terminal-inspired cards with gold accents and glass morphism effects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prompt mb-4">
              <code>$ system:status --format=json</code>
            </div>
            <pre className="text-sm p-3 overflow-auto max-h-32">
              {JSON.stringify({
                status: 'operational',
                uptime: '99.98%',
                latency: '42ms',
                memory: '64.2%',
                lastUpdated: new Date().toISOString()
              }, null, 2)}
            </pre>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="button-ny">Refresh Status</Button>
          </CardFooter>
        </Card>

        <Card className="card">
          <CardHeader>
            <CardTitle className="heading-2">
              <TerminalIcon className="mr-2 inline" />
              <span className="accent-element">Terminal</span> Interface
            </CardTitle>
            <CardDescription className="body-sm">
              Modern tech aesthetic with gold accents on dark backgrounds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="body">
              The New York Terminal theme combines sophisticated typography with
              <span className="accent-element"> amber/gold accents </span> 
              for a premium developer experience.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="button-ny">View Documentation</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="py-6">
        <h3 className="heading-2 mb-4">Configuration <span className="accent-element">Controls</span></h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key" className="ui-label flex items-center">
                <CodeIcon className="mr-2" />
                API Key
              </Label>
              <Input id="api-key" placeholder="Enter your API key" className="form-control-refined" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endpoint" className="ui-label flex items-center">
                <TerminalIcon className="mr-2" />
                Endpoint URL
              </Label>
              <Input id="endpoint" type="url" placeholder="https://api.example.com/v1" className="form-control-refined" />
            </div>
            <div className="prompt mt-4 p-2">
              <code className="text-xs">Authentication successful. Token expires in 24h.</code>
            </div>
          </div>
          <div className="space-y-4">
            <Card className="card">
              <CardHeader>
                <CardTitle className="heading-3 accent-element">Terminal Config</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-sm">Form controls with terminal-inspired styling featuring gold accents and glass effects.</p>
                <div className="mt-4">
                  <code className="block"># ~/.terminal-config</code>
                  <pre className="text-xs mt-2 p-2">
                    {`theme: new-york-terminal
accentColor: amber-gold
fontFamily: SF Mono
transparency: 0.8`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <h3 className="heading-2 mb-4">Command <span className="accent-element">Information</span></h3>
        <div className="flex items-center gap-4">
          <div className="tooltip">
            <Button variant="outline" className="button-ny">Command Info</Button>
            <span className="tooltip-text">Displays information about available terminal commands</span>
          </div>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" className="button-ny btn-gradient">
                  <TerminalIcon className="mr-2" />
                  Terminal Docs
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="ui-caption">Terminal-inspired tooltip with glass effect</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="mt-8 prompt p-4">
          <div className="flex items-center mb-2">
            <TerminalIcon className="mr-2" />
            <span className="font-semibold accent-element">Terminal Command Reference</span>
          </div>
          <code className="block text-sm mt-2">$ help --topic="styling"</code>
          <pre className="text-xs mt-2">
            {`Available commands:
  theme:apply [name]     - Apply a theme preset
  theme:customize [opts] - Customize theme settings
  font:set [family]     - Change terminal font
  color:accent [hex]    - Set accent color`}
          </pre>
        </div>
      </section>
    </div>
  );
}
