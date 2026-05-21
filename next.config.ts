import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    // Pin workspace root explicitly so Vercel doesn't walk up the
    // filesystem and accidentally pick the wrong package-lock.json.
    root: process.cwd(),
  },
};

export default nextConfig;
