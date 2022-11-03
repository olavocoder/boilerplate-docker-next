import UseCommonData from 'hooks/useCommonData'
import { getCategoryBySlug } from 'services/wordpress'
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
  const path = params.slug
  const configs = await UseCommonData(path)
  const category = await getCategoryBySlug(path)
  const seo = [];
  const posts = [];

  return {
    revalidate: 1200,
    props: {
      seo,
      ...configs,
      posts,
      category
    }
  }
}
