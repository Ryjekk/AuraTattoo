export default async function getResidents() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query GetResidents {
          residents {
              id
              slug
              name
              order
              bio
              instagramLink
              mainImage {
                     url
                     id
                    }
              video {
                     url
                     id
                    }
              gallery {
                     url
                     id
                    } 
                }
            }
      `,
    }),
  });
  const { data } = await response.json();
  return data.residents;
}
