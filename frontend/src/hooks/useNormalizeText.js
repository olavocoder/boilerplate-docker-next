const UseNormalizeText = (str) => {
  if (!str) return null

  const normalized = str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s/g, '+')
    .replace(/[^a-z0-9+]/g, '')

  return normalized
}

export default UseNormalizeText
