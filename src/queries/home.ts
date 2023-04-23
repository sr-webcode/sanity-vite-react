export const HOME_QUERY = `*[_type == "post" && slug.current match "my-first-react-sanity-post"]{
        title,
        slug,
        body,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }
    `;
