/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// Replace 'portfolio' with your actual repo name if different
const repoName = 'portfolio';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
