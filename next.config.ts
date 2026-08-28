import withFbtee from "@nkzw/next-plugin-fbtee";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default withFbtee({
  fbtCommon: {},
  fbtEnumManifest: {},
})(nextConfig);
