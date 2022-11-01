import { useEffect, useState } from 'react'

import { customData, dataLayerPush } from 'components/Analytics'
import ExclusiveContent from 'components/ExclusiveContent'
import ListingPageBanner from 'components/ListingPageBanner'
import ListingPosts from 'components/ListingPosts'
import Loading from 'components/Loading'
import Newsletter from 'components/Newsletter'
import UseSeoTreated from 'hooks/useSeoTreated'
import { getStoriesByCategory } from 'services/wordpress'
import Base from 'templates/Base'

export default function CategoryTemplate({
  seo,
  header,
  footer,
  contrast,
  fontsize,
  querys,
  category,
  posts,
  newsletter
}) {
  const [exclusiveItems, setExclusiveItems] = useState(null)
  const [exclusiveContent, setExclusiveContent] = useState(null)
  const [statePosts, setStatePosts] = useState(posts)
  const [stories, setStories] = useState([])
  const [loadingStories, setLoadingStories] = useState([])
  const [coverImage, setCoverImage] = useState()
  const [seoTreated, setSeoTreated] = useState([])
  useEffect(() => {
    let cat = category ? category[0] : {}
    const page = { ...cat, type: 'category', ...querys }
    const tempSeo = UseSeoTreated({ seo, page })
    setSeoTreated(tempSeo)
  }, [seo, category, querys])

  useEffect(() => {
    setStatePosts(posts)
  }, [posts])

  useEffect(() => {
    let temp = null

    if (stories?.length && stories !== undefined && stories !== null) {
      temp = stories.map((item) => {
        const element = item.story_data?.pages[0].elements.find((img) => {
          return img.resource !== undefined
        })

        if (element) {
          const tempItem = {
            image: {
              width: element.resource.width,
              height: element.resource.height,
              sizes: {
                large: element.resource.src
              },
              alt: element.resource.alt
            },
            post: {
              post_type: 'web-story',
              post_name: item.slug,
              post_title: item.yoast_head_json.title
            },
            text: item.yoast_head_json.description
          }

          return { ...tempItem }
        }
      })
    }

    setExclusiveItems(temp)
  }, [stories])

  useEffect(() => {
    setExclusiveContent({
      title: 'Web Stories da Porto',
      text: 'Confira nossa seção especial de conteúdos exclusivos da Porto. Aqui você vai encontrar materiais especiais e interativos, podendo compartilhar e baixar entre amigos e familiares.',
      exclusive_items: exclusiveItems
    })
  }, [exclusiveItems])

  useEffect(() => {
    setLoadingStories(true)
    const stories_id = category ? category[0].acf.web_categories : null
    const image = category ? category[0].acf.cover_image_category : null

    setCoverImage(image)

    const fetchStories = async () => {
      const tempStories = await getStoriesByCategory(stories_id)
      await setLoadingStories(false)
      await setStories(tempStories)
    }

    if (stories_id) {
      fetchStories()
    } else {
      setLoadingStories(false)
    }
  }, [category])

  const categoryName = category && category[0].name

  header = {
    ...header,
    contrast: contrast,
    fontsize: fontsize
  }

  useEffect(() => {
    customData('pagina-categoria', categoryName, 'porto', 'blog')
    dataLayerPush('pageview')
  }, [category])

  return (
    <Base seo={seoTreated} header={header} footer={footer}>
      <ListingPageBanner image={coverImage} title={categoryName} />

      <ListingPosts params={querys} posts={statePosts} />

      {!loadingStories && exclusiveItems && (
        <ExclusiveContent props={exclusiveContent}></ExclusiveContent>
      )}

      {loadingStories && <Loading />}

      <Newsletter props={newsletter} />
    </Base>
  )
}
