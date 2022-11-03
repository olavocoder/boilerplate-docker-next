//Tratar as informações conforme a biblioteca:
//https://www.npmjs.com/package/next-seo

const UseSeoTreated = ({ seo, page }) => {
  const title = seo.title
  const description = seo.description
  const canonical = seo.og_url
  const noindex = seo.robots.follow.index === 'noindex' ? true : false

  data = {
    title,
    description,
    canonical,
    noindex
  }

  return data
}

export default UseSeoTreated
