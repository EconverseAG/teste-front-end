import path from "node:path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.econverse.com.br",
        pathname: "/teste-front-end/**",
      },
    ],
  },
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
}

export default nextConfig
