import UseCommonData from 'hooks/useCommonData'
import { getTagBySlug, mostReadByTag } from 'services/wordpress'
import LoadingTemplate from 'templates/Loading'
import TagTemplate from 'templates/Tag'

export default function Tag(data) {
  if (data.posts) {
    return <TagTemplate {...data} />
  } else {
    return <LoadingTemplate {...data} />
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const path = params.slug[0]
  const page = params.slug[1] ? parseInt(params.slug[1]) : 1

  if (params.slug[2] !== undefined || isNaN(page) || params.slug[1] == '1') {
    return {
      redirect: {
        permanent: true,
        destination: `/tag/${path}`
      }
    }
  }

  if (params.slug[0] == '1') {
    return {
      redirect: {
        permanent: true,
        destination: '/tag/'
      }
    }
  }

  let tag = null
  let configs,
    posts = {}

  //Configurações da página
  configs = await UseCommonData(path)
  tag = await getTagBySlug(path)

  if (!tag?.length) {
    return {
      notFound: true
    }
  }

  // Obtém o id da categoria
  const tagId = tag[0].id

  // Busca os Posts de acordo com a página
  if (tagId) posts = await mostReadByTag(page, 12, tagId)

  const seo = { ...tag[0].yoast_head_json }
  const querys = {
    path,
    type: 'tag',
    page,
    id: tagId
  }

  return {
    revalidate: 1200,
    props: {
      seo,
      ...configs,
      querys,
      posts,
      tag
    }
  }
}
