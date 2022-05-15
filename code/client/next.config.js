/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API_PATH: 'http://localhost:3000/v1',
  },
}
