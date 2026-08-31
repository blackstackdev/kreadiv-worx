import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: githubPages ? "/kreadiv-worx" : "",
  },
  images: { unoptimized: true },
  trailingSlash: githubPages,
  ...(githubPages
    ? {
        output: "export" as const,
        basePath: "/kreadiv-worx",
        assetPrefix: "/kreadiv-worx/",
      }
    : {}),
};

export default nextConfig;
