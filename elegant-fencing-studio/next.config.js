/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: false,
  staticPageGenerationTimeout: 600,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  async redirects() {
    return [
      {
        source: '/blogs/stainless-steel-hollow-section-selection-guide',
        destination: '/blogs/stainless-steel-coil-sheet-wire-selection-guide',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
