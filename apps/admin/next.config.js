/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@lmui/shared"],
  // This app never uses next/image. Disabling optimization takes the
  // /_next/image route handler out of service, which closes off
  // GHSA-2xp9-vwfh-vxw4 (an unauthenticated RCE in that endpoint present in
  // the installed Next.js version) without a breaking major-version bump.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
