import { wordpressApi } from 'services/api'

// Este arquivo possui as rotas para a criação do sitemaps
// Cada rota busca todas as slugs de um tipo de conteúdo

export async function mapAllPosts() {
  try {
    const response = await wordpressApi.get(`/wp/v2/sitemap-posts`)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function mapAllCats() {
  try {
    const response = await wordpressApi.get(`/wp/v2/sitemap-cats`)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function mapAllTags() {
  try {
    const response = await wordpressApi.get(`/wp/v2/sitemap-tags`)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}
