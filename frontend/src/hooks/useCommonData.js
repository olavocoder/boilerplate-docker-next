import { getGroupData } from 'services/wordpress'

const useCommonData = async (path = '') => {
  const configs = await getGroupData(`general-configs`)

  const header =
    configs.header_configs !== undefined ? configs.header_configs : null
  const footer =
    configs.footer_configs !== undefined ? configs.footer_configs : null
  const sideBanner =
    configs.side_banners !== undefined ? configs.side_banners : null
  const frequentDoubts =
    configs.frequent_doubts !== undefined ? configs.frequent_doubts : null
  const sideCotations =
    configs.side_cotations !== undefined ? configs.side_cotations : null
  const newsletter =
    configs.newsletter !== undefined ? configs.newsletter : null

  const data = {
    header: { ...header, path },
    sideBanner,
    frequentDoubts,
    footer,
    sideCotations,
    newsletter
  }

  return data
}

export default useCommonData
