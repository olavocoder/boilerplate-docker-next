import UseCommonData from 'hooks/useCommonData'
import GuideTemplate from 'templates/Guide'

export default function Guide(props) {
  return <GuideTemplate {...props} />
}

export async function getStaticProps() {
  const configs = await UseCommonData()

  const seo = {
    title: 'Guideline',
    description: 'Página para ambiente de desenvolvimento',
    noindex: true
  }

  return {
    revalidate: 115200,
    props: {
      seo,
      ...configs
    }
  }
}
