/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'drive.google.com',
      's3.us-south.cloud-object-storage.appdomain.cloud'
    ],
  },
}
