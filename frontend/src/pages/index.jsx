import UseCommonData from 'hooks/useCommonData'
import UseCutString from 'hooks/useCutString'
import {
  getPageData,
  getPostsCategory,
  mostReadCondition
} from 'services/wordpress'
import HomeTemplate from 'templates/Home'

export default function Home(data) {
  return <HomeTemplate {...data} />
}

export async function getStaticProps() {
  const configs = await UseCommonData()
  const data = await getPageData('home')
  const lastPosts = await getPostsCategory(1, 4, 0)
  const mostRead = await mostReadCondition(1, 5, 0, 'time')

  const idSpecialSection = data[0].acf.special_section.special_section || null

  let specialPosts = []
  if (idSpecialSection)
    specialPosts = await getPostsCategory(1, 4, idSpecialSection)

  if (data[0] === undefined || !data[0]) {
    return {
      notFound: true
    }
  }

  const seo = { ...data[0].yoast_head_json }
  const hero_blog = data[0].acf.hero_blog

  function curStr(str) {
    const newStr = UseCutString(str, 90)
    return newStr
  }

  var bannersHero = hero_blog.map((item) => {
    let customItem = {}

    if (item.banner_type === 'custom' && item.custom_banner) {
      customItem = {
        text: curStr(item.custom_banner.banner_text),
        navText: item.custom_banner.banner_text.replace('<br />', ' '),
        link: { ...item.custom_banner.text_link },
        overline: { ...item.custom_banner.category_link },
        img: { ...(item.article_image || null) }
      }
    } else if (item.banner_type === 'post' && item.text_group) {
      customItem = {
        text: curStr(item.text_group.post_title),
        navText: item.text_group.post_title.replace('<br />', ' '),
        link: {
          target: false,
          title: 'Ler Mais',
          url: `/${item.text_group.post_name}`
        },
        overline: item.category
          ? {
              target: false,
              title: item.category.name,
              url: `/${item.category.slug}`
            }
          : null,
        img: { ...(item.article_image || null) }
      }
    }
    return { ...customItem }
  })

  bannersHero = bannersHero.filter((item) => {
    return item.text !== 'undefined'
  })

  return {
    revalidate: 1200,
    props: {
      seo,
      props: data,
      lastPosts,
      mostRead,
      specialPosts,
      bannersHero,
      ...configs
    }
  }
}
