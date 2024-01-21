/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 't3.ftcdn.net',
            },
        ],
    },
};

export default nextConfig;
