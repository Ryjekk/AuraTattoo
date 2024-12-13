export default async function getInstagramSnaps() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query getInstagramSnaps {
          instaSnaps(stage: PUBLISHED) {
    alt
    instagramLink
    id
    image {
      id
      url
    }
    withVideo
    videoPlaceholder {
      id
      url
    }
  }
            }
      `,
    }),
    next: {
      revalidate: 300,
    },
  });
  const { data } = await response.json();
  return data.instaSnaps;
}
