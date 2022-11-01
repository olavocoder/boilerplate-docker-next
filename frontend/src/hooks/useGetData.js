import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const useGetData = (url) => {
  const { data } = useSWR(url, fetcher)

  return data
}

export default useGetData
