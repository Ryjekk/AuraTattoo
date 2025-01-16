export default async function getResident(slug) {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({
      variables: {
        slug,
      },
      query: `
        query getResident($slug: String!) {
          resident(where: {slug: $slug }) {
              bio
              id
              instagramLink
              name
              slug
              gallery1:gallery {
                url
                blurUrl: url(transformation: {image: {blur: {amount: 10}}})
                thumbUrl: url(transformation: {image: {resize: {height: 400, width: 400}}})
                id
                  width
                height
                fileName
              }
                gallery2: gallery(skip:10){
                 url
                blurUrl: url(transformation: {image: {blur: {amount: 10}}})
                thumbUrl: url(transformation: {image: {resize: {height: 400, width: 400}}})
                id
                  width
                height
                fileName
                }
              mainImage {
                url(transformation: {image: {resize: {height: 880, width: 620}}})
                id
              }
              video {
                id
                url
              }
            }
}
      `,
    }),
  });
  let { data } = await response.json();

  let gallery = data?.resident?.gallery1.concat(data?.resident?.gallery2);
  data.resident.gallery = gallery;
  return data?.resident;
}
