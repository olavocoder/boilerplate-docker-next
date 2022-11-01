import UseCommonData from 'hooks/useCommonData'
import { mostReadByTag, getPageData } from 'services/wordpress'
import LoadingTemplate from 'templates/Loading'
import TagTemplate from 'templates/Tag'

export default function Story(data) {
  if (data.posts) {
    return <TagTemplate {...data} />
  } else {
    return <LoadingTemplate {...data} />
  }
}

export async function getStaticProps() {
  const page = 1

  let configs,
    posts = {}

  //Configurações da página
  configs = await UseCommonData()
  const querys = {
    path: '/tag',
    type: 'tag',
    page,
    id: 0
  }

  posts = await mostReadByTag(page, 12, 0)
  const data = await getPageData('tags')
  const seo = data[0] !== undefined ? { ...data[0].yoast_head_json } : {}
  const acf = data[0] !== undefined ? { ...data[0].acf } : {}

  return {
    revalidate: 1200,
    props: {
      seo,
      ...configs,
      posts,
      querys,
      acf: acf
    }
  }
}
