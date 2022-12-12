/** @type {import('next').NextConfig} */
const nextConfig = {
  lib: ['es6', 'dom'],
  reactStrictMode: true,
  swcMinify: true,
  noImplicitAny: true,
  noImplicitThis: true,
  strictNullChecks: true,
}

module.exports = nextConfig
