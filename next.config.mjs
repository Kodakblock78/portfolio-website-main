/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you're deploying to a subpath (e.g., your GitHub repo name), set this:
  basePath: '/portfolio-website-main', // Replace 'your-repo-name' with your actual repo name

  // Since the "target" and "exportTrailingSlash" are no longer valid, we can skip them
  // Additionally, Next.js has built-in support for static site generation (SSG) via `next export`

  // Optional: If you need to disable some Next.js features (like Image optimization in a static export):
  images: {
    unoptimized: true,
  },

  // Optional: Enable React Strict Mode (helpful during development)
  reactStrictMode: true,
};

export default nextConfig;