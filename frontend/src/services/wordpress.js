import { wordpressApi } from 'services/api'

export async function getGroupData(id) {
  try {
    const response = await wordpressApi.get(`/groups/configs/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}


export async function getMedia(id) {
  try {
    if (!id) return null

    const response = await wordpressApi.get(`/wp/v2/media/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getPostsCategory(page, numPosts, catID, type = null) {
  try {
    const postType = type ? `/${type}` : ''
    const route = `/wp/v2/all-posts-category/${page}/${numPosts}/${catID}${postType}`

    const response = await wordpressApi.get(route)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getAllPosts() {
  try {
    const response = await wordpressApi.get('/wp/v2/posts?_embed')

    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getSearch(slug) {
  try {
    const response = await wordpressApi.get(`/wp/v2/get-search/${slug}`)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getPost(slug) {
  try {
    const response = await wordpressApi.get(`/wp/v2/get-post-by-slug/${slug}`)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}