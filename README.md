# Personal CV Website

A modern, responsive personal CV/resume website built with Next.js, TypeScript, and TailwindCSS.

## Features

- Clean, responsive design
- Built with Next.js 14
- Styled with TailwindCSS
- UI components from Radix UI
- TypeScript for type safety
- GitHub Avatar integration that automatically updates with your GitHub profile
- Apple-inspired typography system with responsive text scaling

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/personal-cv.git
cd personal-cv
```

2. Install dependencies
```bash
npm install --legacy-peer-deps
# or
yarn install
```

3. Run the development server
```bash
# Standard development server
npm run dev
# or
yarn dev

# With Turbopack for faster development (recommended)
npm run dev:turbo
# or
yarn dev:turbo
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Development with Turbopack

This project supports Turbopack, a new incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js. Turbopack offers significantly faster refresh and build times during development.

To use Turbopack:

```bash
npm run dev:turbo
# or
yarn dev:turbo
```

Benefits of Turbopack:
- Up to 10x faster startup times compared to webpack
- Significantly faster refresh rates during development
- More efficient hot module replacement (HMR)
- Lower memory usage

## Deployment

The project can be easily deployed to Vercel, Netlify, or any other platform that supports Next.js.

## GitHub Avatar Integration

This website includes a feature that automatically pulls your profile picture from GitHub:

1. The avatar displayed next to your name comes directly from your GitHub profile
2. When you update your GitHub profile picture, your website avatar updates automatically
3. The website's favicon is also set to your GitHub profile picture
4. A local copy of your GitHub avatar is stored for use as the favicon

To configure your GitHub username:

1. Open `app/page.tsx`
2. Find the line with `const githubUsername = "frankwrk";`
3. Replace `frankwrk` with your own GitHub username

## Typography System

This website features an Apple-inspired typography system designed for optimal readability and aesthetics across all devices:

### Features

- Responsive font sizes using CSS clamp() for fluid typography
- Consistent type hierarchy modeled after Apple's design language
- Display, Heading, Body, and UI text styles
- Font weight and letter spacing utilities
- Optimized for readability on all screen sizes

### Usage

The typography system provides ready-to-use CSS classes:

```jsx
// Display Typography (for large headlines)
<h1 className="display-1">Headline</h1>
<h2 className="display-2">Headline</h2>
<h3 className="display-3">Headline</h3>

// Heading Typography
<h2 className="heading-1">Section Heading</h2>
<h3 className="heading-2">Subsection Heading</h3>
<h4 className="heading-3">Minor Heading</h4>

// Body Typography
<p className="body-lg">Larger body text</p>
<p className="body">Standard body text</p>
<p className="body-sm">Smaller body text</p>

// UI Typography
<label className="ui-label">Form Label</label>
<button className="ui-button">Button</button>
<figcaption className="ui-caption">Image Caption</figcaption>
```

You can also use utility classes for font weights and letter spacing:

```jsx
<p className="body font-bold tracking-wide">Customized paragraph text</p>
```

Visit `/typography-demo` in your browser to see the complete typography system showcase.

## License

[MIT](LICENSE)
