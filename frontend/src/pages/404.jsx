import UseCommonData from 'hooks/useCommonData'
import ErrorTemplate from 'templates/Error'

export default function ErrorPage(props) {
  return <ErrorTemplate {...props} />
}

export async function getStaticProps() {
  const configs = await UseCommonData()
  const data = []

  // if (data[0] === undefined || !data[0]) {
  //   return {
  //     notFound: true
  //   }
  // }

  const seo = {
    title: '404',
    description: 'Página não encontrada.',
    noindex: true
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
