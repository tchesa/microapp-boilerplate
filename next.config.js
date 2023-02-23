/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

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
        name: 'microapptest-cli',
        remotes: {
          microappui: `microappui@https://microapp-ui.vercel.app/_next/static/${
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
