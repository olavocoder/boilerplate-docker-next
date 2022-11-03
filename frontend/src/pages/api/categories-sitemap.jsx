import { mapAllCats } from 'services/sitemap'
import { SitemapStream, streamToPromise } from 'sitemap'

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: process.env.NEXT_PUBLIC_FRONT_URL,
      cacheTime: 600000
    })

    // List of categories and subcategories
    const cats = await mapAllCats()

    // Create each URL row
    cats.forEach((cat) => {
      const slug = cat.replace(
        `${process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL}/category/`,
        ''
      )
      smStream.write({
        url: `c/${slug}`,
        changefreq: 'daily',
        priority: 0.9
      })
    })

    // End sitemap stream
    smStream.end()

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString()

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    })

    // Display output to user
    res.end(sitemapOutput)
  } catch (e) {
    res.send(JSON.stringify(e))
  }
}
