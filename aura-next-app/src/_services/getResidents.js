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
              name
              about
              instagramLink
              image {
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
