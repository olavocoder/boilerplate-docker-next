import axios from 'axios'

const wordpressApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  timeout: 180000
})

export { wordpressApi }
