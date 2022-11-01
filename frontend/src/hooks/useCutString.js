const useCutString = (text, count) => {
  if (!text) return

  const data = text.slice(0, count) + (text.length > count ? '...' : '')

  return data
}

export default useCutString
