import UseCommonData from 'hooks/useCommonData'
import { getPageData } from 'services/wordpress'
import HomeTemplate from 'templates/Home'

export default function Home(data) {
  return <HomeTemplate {...data} />
}

export async function getStaticProps() {
  const configs = await UseCommonData()
  const data = await getPageData('home')

  if (data[0] === undefined || !data[0]) {
    return {
      notFound: true
    }
  }

  const seo = {
    title: 'Home',
    description: 'Página inicial',
    noindex: false
  }

  return {
    revalidate: 1200,
    props: {
      seo,
      props: data,
      ...configs
    }
  }
}
