import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
            {
                source: '/skills',
                destination: '/skills/languages',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;


