import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    swcPlugins: [
      [
        "@nkzw/swc-plugin-fbtee",
        {
          fbtCommon: {},
          fbtEnumManifest: {},
        },
      ],
    ],
  },
};

export default nextConfig;
