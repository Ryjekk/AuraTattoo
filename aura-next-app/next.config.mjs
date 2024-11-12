/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"], // suppress deprecation warning temporarily [https://github.com/sass/dart-sass/issues/2352]
  },
};

export default nextConfig;
