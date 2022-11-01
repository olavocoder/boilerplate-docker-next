import UseCommonData from 'hooks/useCommonData'
import { getCategoryBySlug, mostReadCondition } from 'services/wordpress'
import CategoryTemplate from 'templates/Category'

export default function Category(data) {
  if (data.posts) {
    return <CategoryTemplate {...data} />
  } else {
    return null
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  let path
  let page
  const index = params.slug.length - 1
  const lastPath = params.slug[index]
  if (isNaN(lastPath)) {
    path = lastPath
    page = 1
  } else {
    path = params.slug[index - 1]
    page = lastPath
  }

  let category = null
  let configs,
    posts = {}

  //Configurações da página
  configs = await UseCommonData(path)
  let subredirect = {
    hasSubcategory: false,
    catName: '',
    subcatName: ''
  }

  configs.header.nav_links.map((item) => {
    const categoryName = item.link.url.replace('/c/', '')
    item.subcategoria.map((itemB) => {
      const subcategoryName = itemB.link_subcategoria.url.replace(
        `/c/${categoryName}/`,
        ''
      )
      if (subcategoryName == params.slug[0]) {
        subredirect.hasSubcategory = true
        subredirect.catName = categoryName
        subredirect.subcatName = subcategoryName
      }
    })
  })
  if (params.slug[0] == subredirect.subcatName) {
    return {
      redirect: {
        permanent: true,
        destination: `/c/${subredirect.catName}/${subredirect.subcatName}`
      }
    }
  }
  if (params.slug[2] == '1') {
    return {
      redirect: {
        permanent: true,
        destination: `/c/${params.slug[0]}/${params.slug[1]}`
      }
    }
  }
  if (params.slug[1] == '1') {
    return {
      redirect: {
        permanent: true,
        destination: `/c/${params.slug[0]}`
      }
    }
  }

  category = await getCategoryBySlug(path)
  if (!category?.length) {
    return {
      notFound: true
    }
  }
  // Obtém o id da categoria
  const catId = category[0].id

  // Busca os Posts de acordo com a página
  if (catId) posts = await mostReadCondition(page, 12, catId)
  const seo = { ...category[0].yoast_head_json }
  const querys = {
    path,
    type: 'category',
    page,
    id: catId
  }

  return {
    revalidate: 1200,
    props: {
      seo,
      ...configs,
      querys,
      posts,
      category
    }
  }
}
