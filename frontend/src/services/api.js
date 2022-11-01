import axios from 'axios'

const wordpressApi = axios.create({
  baseURL: process.env.https://www.sumicity.com.br/wp-json/wp/v2/pages,
  timeout: 180000
})

export { wordpressApi }
