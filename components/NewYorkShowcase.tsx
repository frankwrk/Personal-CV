import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function NewYorkShowcase() {
  return (
    <div className="space-y-10 py-8">
      <section>
        <h2 className="heading-1 mb-4">New York Theme</h2>
        <p className="body mb-6">
          This showcases the New York style variant from Shadcn/UI with Apple-inspired enhancements.
        </p>
      </section>

      <section className="space-y-6">
        <div>
          <h3 className="heading-2 mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" className="button-ny btn-gradient">Default Button</Button>
            <Button variant="secondary" className="button-ny btn-gradient">Secondary</Button>
            <Button variant="outline" className="button-ny">Outline</Button>
            <Button variant="ghost" className="button-ny">Ghost</Button>
            <Button variant="destructive" className="button-ny btn-gradient">Destructive</Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="card shadow-ny">
          <CardHeader>
            <CardTitle className="heading-2">Card Title</CardTitle>
            <CardDescription className="body-sm">
              Cards in the New York style have refined borders and shadows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="body">This card demonstrates the New York style with enhanced shadows and subtle hover effects.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="button-ny">Learn More</Button>
          </CardFooter>
        </Card>

        <Card className="card shadow-ny">
          <CardHeader>
            <CardTitle className="heading-2">
              <span className="ny-serif">Serif</span> Accents
            </CardTitle>
            <CardDescription className="body-sm">
              Combining sans-serif with subtle serif accents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="body">
              New York style often combines clean sans-serif typefaces with 
              <span className="ny-serif font-medium"> elegant serif accents </span> 
              for an editorial feel.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="button-ny">Explore</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="py-6">
        <h3 className="heading-2 mb-4">Form Controls</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="ui-label">Name</Label>
              <Input id="name" placeholder="Enter your name" className="form-control-refined" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="ui-label">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="form-control-refined" />
            </div>
          </div>
          <div className="space-y-4">
            <Card className="card shadow-ny-sm">
              <CardHeader>
                <CardTitle className="heading-3">Form Example</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-sm">Form controls with refined styling and subtle transitions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <h3 className="heading-2 mb-4">Tooltips</h3>
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="button-ny">Hover Me</Button>
              </TooltipTrigger>
              <TooltipContent className="shadow-ny-sm">
                <p className="ui-caption">New York style tooltips</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" className="button-ny btn-gradient">Information</Button>
              </TooltipTrigger>
              <TooltipContent className="shadow-ny-sm">
                <p className="ui-caption">Refined tooltip styling</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>
    </div>
  );
}
