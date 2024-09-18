// next.config.js
const nextConfig = {
    webpack(config, { isServer }) {
      // Add file-loader for mp4 files
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/videos/',
              publicPath: '/_next/static/videos/',
              name: '[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
module.exports = nextConfig;
