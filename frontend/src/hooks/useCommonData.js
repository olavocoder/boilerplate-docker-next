import { getGroupData } from 'services/wordpress'

const useCommonData = async (path = '') => {
  const configs = await getGroupData(`general-configs`)

  const header =
    configs.header_configs !== undefined ? configs.header_configs : null
  const footer =
    configs.footer_configs !== undefined ? configs.footer_configs : null

  const data = {
    header: { ...header, path },
    footer
  }

  return data
}

export default useCommonData
