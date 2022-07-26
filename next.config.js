const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
