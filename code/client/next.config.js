/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  transpilePackages: ["antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table"],
  env: {
    API_PATH: 'http://localhost:3000/v1',
  },
}
