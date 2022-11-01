import {
  getPostsByTag,
  mostReadByTag,
  getPostsCategory,
  mostReadCondition
} from 'services/wordpress'

const useLoadPosts = async (params, type, order) => {
  if (!params || !type) return null

  const { page, qtde, id } = params
  let posts = []

  if (order === 'relevant') {
    if (type === 'category')
      posts = await mostReadCondition(page, qtde, id, 'time')
    if (type === 'tag') posts = await mostReadByTag(page, qtde, id, 'time')
    if (type === 'video')
      posts = await mostReadCondition(page, qtde, id, 'time', type)
    if (type === 'post')
      posts = await mostReadCondition(page, qtde, id, 'time', type)
    if (type === 'podcast')
      posts = await mostReadCondition(page, qtde, id, 'time', type)
    if (type === 'web-story')
      posts = await mostReadCondition(page, qtde, id, 'time', type)
    if (type === 'rich')
      posts = await mostReadCondition(page, qtde, id, 'time', type)
  } else {
    if (type === 'category') posts = await getPostsCategory(page, qtde, id)
    if (type === 'tag') posts = await getPostsByTag(page, qtde, id)
    if (type === 'video') posts = await getPostsCategory(page, qtde, id, type)
    if (type === 'podcast') posts = await getPostsCategory(page, qtde, id, type)
    if (type === 'post') posts = await getPostsCategory(page, qtde, id, type)
    if (type === 'web-story')
      posts = await getPostsCategory(page, qtde, id, type)
    if (type === 'rich') posts = await getPostsCategory(page, qtde, id, type)
  }
  return posts
}

export default useLoadPosts
