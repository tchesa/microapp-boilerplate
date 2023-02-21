/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const microappUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://microapp-ui.vercel.app';

const nextConfig = {
  reactStrictMode: false,
  ...(process.env.NODE_ENV === 'production'
    ? { assetPrefix: `https://${process.env.VERCEL_URL}` }
    : ''),
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'microappboilerplate',
        remotes: {
          microappui: `microappui@${microappUrl}/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
      })
    );

    return config;
  },
};

module.exports = nextConfig;
