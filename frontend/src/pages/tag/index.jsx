import UseCommonData from 'hooks/useCommonData'
import LoadingTemplate from 'templates/Loading'
import TagTemplate from 'templates/Tag'

export default function TagsHome(data) {
  if (data.posts) {
    return <TagTemplate {...data} />
  } else {
    return <LoadingTemplate {...data} />
  }
}

export async function getStaticProps() {
  const configs = await UseCommonData()
  const seo = [];
  const posts = [];

  return {
    revalidate: 1200,
    props: {
      seo,
      ...configs,
      posts,
    }
  }
}
