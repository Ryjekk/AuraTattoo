export default async function getGuests() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query GetGuests {
          guests {
              id
              name
              returningArtist
              about
              date
              instagramLink
              bookingDetails
              image {
                     url
                     id
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
  return data.guests;
}
