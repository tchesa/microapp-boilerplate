/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: false,
  ...(process.env.NODE_ENV === 'production'
    ? { assetPrefix: `https://${process.env.VERCEL_URL}` }
    : ''),
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'microapp-boilerplate',
        exposes: {
          './Home': './pages/index',
        },
        filename: 'static/chunks/remoteEntry.js',
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
          skipSharingNextInternals: false,
          automaticPageStitching: false,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
