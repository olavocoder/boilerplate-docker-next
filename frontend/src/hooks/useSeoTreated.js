//Tratar as informações conforme a biblioteca:
//https://www.npmjs.com/package/next-seo

export const UseSeoTreated = (seo) => {
  if (!seo) {
    console.log(seo)
  }
  // const title = seo.title
  // const description = seo.description
  // const canonical = seo.og_url
  // const noindex = seo.robots.follow.index === 'noindex' ? true : false

  const title = ''
  const description = ''
  const canonical = ''
  const noindex = ''

  const data = {
    title,
    description,
    canonical,
    noindex
  }

  return data
}
