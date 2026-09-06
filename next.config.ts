import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/GHATAK-VISIIONS' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
