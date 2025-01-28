/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optional: If you're deploying to a subpath (e.g., your GitHub repo name), set this:
    basePath: '/portfolio-website-main', // Replace 'portfolio-website-main' with your actual repo name
  
    // Use output: 'export' to enable static export in Next.js
    output: 'export',
  
    // Optional: Disable image optimization for static export
    images: {
      unoptimized: true,
    },
  
    // Enable React Strict Mode (optional, for development)
    reactStrictMode: true,
  };
  
  export default nextConfig;