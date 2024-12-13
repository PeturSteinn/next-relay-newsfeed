/** @type {import('next').NextConfig} */

const nextConfig = {
  rewrites: async () => [
    {
      source: "/api/proxy/:path",
      destination: "http://localhost:8080",
    },
  ],
  compiler: {
    relay: {
      src: "./src",
      language: "typescript",
      artifactDirectory: "./src/__generated__",
      eagerEsModules: true,
    },
  },
};

export default nextConfig;
