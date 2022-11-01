import { mapAllTags } from 'services/sitemap'
import { SitemapStream, streamToPromise } from 'sitemap'

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: process.env.NEXT_PUBLIC_PORTO_URL,
      cacheTime: 600000
    })

    // List of tags
    const tags = await mapAllTags()

    // Create each URL row
    tags.forEach((tag) => {
      const slug = tag.replace('https://admin.blog.portoseguro.com.br/', '')
      smStream.write({
        url: `/${slug}`,
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