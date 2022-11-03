// const withFonts = require('next-fonts')
// const withPWA = require('next-pwa')

// const isProd = process.env.NODE_ENV === 'production'

// module.exports = withPWA(
//   withFonts({
//     pwa: {
//       dest: 'public',
//       disable: !isProd
//     },
//     experimental: {
//       amp: {
//         skipValidation: true
//       }
//     },
//     images: {
//       domains: [
//         process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
//         process.env.NEXT_PUBLIC_WORDPRESS_IMAGES
//       ]
//     }
//   })
// )

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/]
})

const nextConfig = withPWA({
  // next config
})
module.exports = nextConfig
