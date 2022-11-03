//Tratar as informações conforme a biblioteca:
//https://www.npmjs.com/package/next-seo

const UseSeoTreated = ({ seo }) => {
  const title = seo.title
  const description = seo.description
  const canonical = seo.og_url
  const noindex = seo.robots.follow.index === 'noindex' ? true : false

  const data = {
    title,
    description,
    canonical,
    noindex
  }

  return data
}

export default UseSeoTreated
