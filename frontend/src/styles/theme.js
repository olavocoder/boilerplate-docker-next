import { lightColors } from './utils/colors'
import { size } from './utils/devices'
import { heights } from './utils/settings'

export default {
  grid: {
    container: '80rem',
    gutter: '6rem',
    largeGutter: '12rem'
  },
  colors: lightColors,
  font: {
    family: {
      normal:
        "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    sizes: {
      small: '0.75rem', // 12px
      small2: '0.875rem', // 14px
      normal: '1rem', // 16px
      normal2: '1.25rem', // 20px
      normal3: '1.5rem', // 24px
      normal4: '1.75rem', // 28px
      medium: '2rem', // 32px
      medium2: '2.25rem', // 36px
      medium3: '2.5rem', // 40px
      large: '3rem', // 48px
      large2: '3.5rem' // 56px
    },
    height: {
      small: '1rem', // 16px
      small2: '1.25rem', // 20px
      normal: '1.5rem', // 24px
      normal2: '1.75rem', // 28px
      normal3: '2rem', // 32px
      normal4: '2.25rem', // 36px
      medium: '2.5rem', // 40px
      medium2: '2.75rem',
      medium3: '3rem', // 48px
      large: '3.25rem',
      large2: '3.75rem'
    },
    weight: {
      light: 300,
      regular: 400, // base
      medium: 500,
      bold: 700
    },
    spacing: {
      small: '-0.0063rem',
      small2: '-0.0031rem',
      normal: '0rem',
      normal2: '0.0063rem',
      normal3: '0.0094rem',
      normal4: '0.0125rem',
      medium: '0.0156rem',
      medium2: '0.0188rem',
      medium3: '0.025rem',
      large: '0.0313rem'
    }
  },
  input: {
    sizes: {
      thini: '35px',
      medium: '48px'
    }
  },
  spacings: {
    xxsmall: '0.375rem', // xxs (6px)
    xsmallM: '0.688rem', // xs (10px)
    xsmall: '0.813rem', // xs (13px)
    small: '0.875rem', // sm (14px)
    medium: '1rem', // base (16px)
    large: '1.125rem', // md (18px)
    xlarge: '1.25rem', // lg (20px)
    xxlarge: '1.5rem' // xlg ()
  },
  layers: {
    base: 1,
    menu: 20,
    overlay: 40,
    modal: 60,
    inFront: 99
  },
  border: {
    radius: '4px',
    radiusFull: '10rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadow: {
    base: '2px 1px 10px rgba(0, 0, 0, 0.15)',
    card: '0px 1px 6px 1px rgba(115, 115, 115, 0.16)',
    cardElevated: '0px 2px 6px 2px rgba(115, 115, 115, 0.32)',
    header: '0px 1px 6px  rgba(142, 142, 142, 0.1)'
  },
  sizes: {
    headerM: `${heights.header.mobile}px`,
    headerD: `${heights.header.desk}px`,
    topHeader: `${heights.header.top}px`
  },
  flexa: {
    breakpoints: {
      lg: size.tabletL / 16,
      xlg: size.laptopM / 16
    }
  }
}
