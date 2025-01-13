export default function manifest() {
  return {
    name: "Aura Tattoo Reykjavik",
    short_name: "Aura Tattoo",
    description: "An website of Aura Tattoo studio based Reykjavik Iceland",
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    lang: "en",
    categories: ["tattoo", "iceland", "reykjavik", "tattoo artist"],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}