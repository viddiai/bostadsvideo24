import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    // Pin workspace root explicitly so Vercel doesn't walk up the
    // filesystem and accidentally pick the wrong package-lock.json.
    root: process.cwd(),
  },
  async rewrites() {
    return {
      // beforeFiles runs ahead of filesystem routes, so it can override the
      // existing "/" homepage for the campaign subdomain. The main domain is
      // unaffected. maklarerbjudande.bostadsvideo24.se/ shows /maklare
      // without changing the visible URL.
      beforeFiles: [
        {
          source: "/",
          has: [
            { type: "host", value: "maklarerbjudande.bostadsvideo24.se" },
          ],
          destination: "/maklare",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
