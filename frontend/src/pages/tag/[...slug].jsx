import UseCommonData from 'hooks/useCommonData'
import { getTagBySlug } from 'services/wordpress'
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
  const path = params.slug
  const configs = await UseCommonData(path)
  const tag = await getTagBySlug(path)
  const seo = [];
  const posts = [];

  return {
    revalidate: 1200,
    props: {
      seo,
      ...configs,
      tag,
      posts
    }
  }
}
