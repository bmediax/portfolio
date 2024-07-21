import createMDX from "@next/mdx";
// const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({ extension: /\.mdx?$/ });

// export default withMDX(nextConfig);
export default withMDX(nextConfig);
