/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "https://s3-inventory-management-irene.s3.us-west-1.amazonaws.com/assets/product1.png",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
