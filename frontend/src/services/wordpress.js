import { wordpressApi } from 'services/api'

export async function getMedia(id) {
  try {
    if (!id) return null

    const response = await wordpressApi.get(`/wp/v2/media/${id}`)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getPostsCategory(page, numPosts, catID, type = null) {
  try {
    const postType = type ? `/${type}` : ''
    const route = `/wp/v2/all-posts-category/${page}/${numPosts}/${catID}${postType}`

    const response = await wordpressApi.get(route)
    return response.data
  } catch (err) {
    console.error(err)
    return []
  }
}

export async function getAllPosts() {
  try {
    const response = await wordpressApi.get('/wp/v2/posts?_embed')

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getSearch(slug) {
  try {
    const response = await wordpressApi.get(`/wp/v2/get-search/${slug}`)
    return response.data
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function getPost(slug) {
  try {
    const response = await wordpressApi.get(`/wp/v2/get-post-by-slug/${slug}`)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getSlugs(type) {
  let elements = []

  switch (type) {
    case 'posts':
      elements = await getAllPosts()

      break
  }

  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug
      }
    }
  })

  return elementsIds
}


