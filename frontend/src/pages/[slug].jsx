import UseCommonData from 'hooks/useCommonData'
import UseSeoTreated from 'hooks/useSeoTreated'
import {
  getPost,
  getCategories,
  registerPostView,
  getPostsCategory
} from 'services/wordpress'
import ArticleTemplate from 'templates/Article'

export default function SingleArticle(data) {
  const dataFetched = data.props !== undefined ? data.props[0] : null
  if (dataFetched) {
    return <ArticleTemplate {...data} />
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
  const path = params.slug
  let category = null
  let subcategory = null

  if (path === 'type') {
    return {
      notFound: true
    }
  }

  const configs = await UseCommonData(path)
  const data = await getPost(path)
  if (data[0] === undefined) {
    return {
      notFound: true
    }
  }

  const postId = data[0].id
  registerPostView(postId)

  // Obtem as informações da categoria
  const catId = data[0]['category-id'].find((item, index) => {
    return index === 0
  })
  if (catId || category) category = await getCategories(catId)

  const seo = { ...data[0].yoast_head_json }
  const page = { ...data[0], path }
  const tempSeo = UseSeoTreated({ seo, page })

  const relatedPosts = await getPostsCategory(1, 5, catId)
  let filteredPosts = []
  relatedPosts.map((post) => {
    if (post.id != data[0].id) {
      filteredPosts.push(post)
    }
  })
  if (filteredPosts.length > 4) filteredPosts.pop()

  return {
    revalidate: 1200,
    props: {
      seo,
      path,
      props: data,
      ...configs,
      category,
      subcategory,
      tempSeo,
      filteredPosts
    }
  }
}
