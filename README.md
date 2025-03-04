# Personal CV Website

A modern, responsive personal CV/resume website built with Next.js, TypeScript, and TailwindCSS.

## Features

- Clean, responsive design
- Built with Next.js 14
- Styled with TailwindCSS
- UI components from Radix UI
- TypeScript for type safety
- GitHub Avatar integration that automatically updates with your GitHub profile

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
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Building for Production

```bash
npm run build
# or
yarn build
```

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

## License

[MIT](LICENSE)
