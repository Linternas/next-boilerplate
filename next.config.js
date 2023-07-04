/** @type {import('next').NextConfig} */
const nextConfig = {
  lib: ['es6', 'dom'],
  reactStrictMode: true,
  swcMinify: true,
  noImplicitAny: true,
  noImplicitThis: true,
  strictNullChecks: true,
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
