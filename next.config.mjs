/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.econverse.com.br",
        port: "",
        pathname: "/teste-front-end/junior/tecnologia/fotos-produtos/**",
        search: "",
      },
    ],
    qualities: [75],
  },
};

export default nextConfig;
