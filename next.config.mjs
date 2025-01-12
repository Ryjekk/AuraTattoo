/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"], // suppress deprecation warning temporarily [https://github.com/sass/dart-sass/issues/2352]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu-west-2.graphassets.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/join',
        destination: '/vacancy',
        permanent: true,
      },
      {
        source: '/studioPolicy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/aftercare',
        destination: '/faq?q=1#qst-1',
        permanent: true,
      },
      {
        source: '/covid-19',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/malka',
        destination: '/residents/malkaink',
        permanent: true,
      },
      {
        source: '/eerie',
        destination: '/residents/eerieettt',
        permanent: true,
      },
      {
        source: '/anna',
        destination: '/residents/sereneneroink',
        permanent: true,
      },
      {
        source: '/old-blog/:slug',
        destination: '/new-blog/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
