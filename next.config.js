/** @type {import('next').NextConfig} */
const nextConfig = {
    Compression: true,
    reactStrictMode: true,
    images: {
        domains: ["img.shuaxinjs.cn", "avatars.githubusercontent.com"],
    },
};

module.exports = nextConfig;
