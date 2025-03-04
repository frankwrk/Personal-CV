import React from 'react';

export default function TypographyDemo() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="display-3">Apple-Inspired Typography System</h1>
      
      <section className="mb-12">
        <h2 className="heading-1 mb-4">Display Typography</h2>
        <div className="space-y-6 mb-6">
          <div>
            <p className="ui-caption text-muted-foreground mb-2">display-1</p>
            <p className="display-1">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">display-2</p>
            <p className="display-2">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">display-3</p>
            <p className="display-3">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="heading-1 mb-4">Heading Typography</h2>
        <div className="space-y-6 mb-6">
          <div>
            <p className="ui-caption text-muted-foreground mb-2">heading-1</p>
            <p className="heading-1">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">heading-2</p>
            <p className="heading-2">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">heading-3</p>
            <p className="heading-3">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="heading-1 mb-4">Body Typography</h2>
        <div className="space-y-6 mb-6">
          <div>
            <p className="ui-caption text-muted-foreground mb-2">body-lg</p>
            <p className="body-lg">The quick brown fox jumps over the lazy dog. This paragraph demonstrates the body-lg text style, which is perfect for important paragraphs or featured text content where you want slightly larger text that still maintains excellent readability.</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">body (default)</p>
            <p className="body">The quick brown fox jumps over the lazy dog. This paragraph demonstrates the standard body text style, which is perfect for the main content of your website. It provides optimal readability with balanced line height and comfortable font size for extended reading.</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">body-sm</p>
            <p className="body-sm">The quick brown fox jumps over the lazy dog. This paragraph demonstrates the body-sm text style, which is suitable for secondary information, footnotes, or other supporting content where space efficiency is important but readability must still be maintained.</p>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="heading-1 mb-4">UI Typography</h2>
        <div className="space-y-6 mb-6">
          <div>
            <p className="ui-caption text-muted-foreground mb-2">ui-label</p>
            <p className="ui-label">Form Label</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">ui-button</p>
            <button type="button" className="ui-button bg-primary text-primary-foreground px-4 py-2 rounded-md">Button Text</button>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">ui-caption</p>
            <p className="ui-caption">This is a caption for images, figures, or UI elements</p>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="heading-1 mb-4">Font Weight Utilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="ui-caption text-muted-foreground mb-2">Regular (400)</p>
            <p className="body font-regular">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">Medium (500)</p>
            <p className="body font-medium">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">Semibold (600)</p>
            <p className="body font-semibold">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">Bold (700)</p>
            <p className="body font-bold">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="heading-1 mb-4">Letter Spacing Utilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="ui-caption text-muted-foreground mb-2">tracking-tight</p>
            <p className="body tracking-tight">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">tracking-normal</p>
            <p className="body tracking-normal">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">tracking-wide</p>
            <p className="body tracking-wide">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="ui-caption text-muted-foreground mb-2">tracking-wider</p>
            <p className="body tracking-wider">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </section>
      
      <div className="mt-12 pt-6 border-t">
        <p className="body-sm text-muted-foreground">
          This typography system is designed to provide an Apple-inspired type hierarchy that works across different screen sizes and devices. 
          The system uses fluid typography to scale appropriately on various devices while maintaining readable proportions.
        </p>
      </div>
    </div>
  );
}
