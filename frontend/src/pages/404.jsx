import UseCommonData from 'hooks/useCommonData'
import { getPageData } from 'services/wordpress'
import { mostReadCondition } from 'services/wordpress'
import ErrorTemplate from 'templates/Error'

export default function ErrorPage(props) {
  return <ErrorTemplate {...props} />
}

export async function getStaticProps() {
  const configs = await UseCommonData()
  const data = await getPageData('error-404')
  const mostRead = await mostReadCondition(1, 4, 0, 'time')

  if (data[0] === undefined || !data[0]) {
    return {
      notFound: true
    }
  }

  const seo = {
    title: '404',
    description: 'Página não encontrada.',
    noindex: true
  }

  return {
    revalidate: 1200,
    props: {
      seo,
      props: data[0],
      mostRead,
      ...configs
    }
  }
}
