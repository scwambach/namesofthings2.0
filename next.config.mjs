/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SITE_URL: process.env.SITE_URL,
    SANITY_ID: process.env.SANITY_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
  },
};

export default nextConfig;
