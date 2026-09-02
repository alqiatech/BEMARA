/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@bemara/config",
    "@bemara/design-tokens",
    "@bemara/domain",
    "@bemara/i18n",
    "@bemara/ui-web",
  ],
};

export default nextConfig;
