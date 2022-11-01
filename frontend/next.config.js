const withFonts = require('next-fonts')
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA(
  withFonts({
    pwa: {
      dest: 'public',
      disable: !isProd
    },
    experimental: {
      amp: {
        skipValidation: true
      }
    },
    images: {
      domains: [
        process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
        process.env.NEXT_PUBLIC_WORDPRESS_IMAGES
      ]
    }
  })
)
