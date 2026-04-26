/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// Replace 'portfolio' with your actual repo name if different
const repoName = 'portfolio-bipin';

const nextConfig = {
  ...(isProd && { output: 'export' }),
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
};

module.exports = nextConfig;
