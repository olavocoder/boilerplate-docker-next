import UseCommonData from 'hooks/useCommonData'
import { mostReadCondition, getPageData } from 'services/wordpress'
import CategoryTemplate from 'templates/Category'
import LoadingTemplate from 'templates/Loading'

export default function Story(data) {
  if (data.posts) {
    return <CategoryTemplate {...data} />
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
    path: '/c',
    type: 'category',
    page,
    id: 0
  }

  posts = await mostReadCondition(page, 12, 0, 'time')
  const data = await getPageData('categoria')
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
