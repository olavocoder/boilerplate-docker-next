export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tabletS: 570,
  tablet: 768,
  tabletL: 1025,
  laptopS: 1180,
  laptopM: 1366,
  laptopL: 1440,
  desktopS: 1600,
  desktopM: 1980,
  desktopL: 2560
}

export const devices = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tabletS: `(min-width: ${size.tabletS}px)`,
  maxtablet: `(max-width: ${size.tablet - 1}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tabletL: `(min-width: ${size.tabletL}px)`,
  maxtabletL: `(max-width: ${size.tabletL - 1}px)`,
  laptopS: `(min-width: ${size.laptopS}px)`,
  maxlaptopS: `(max-width: ${size.laptopS - 1}px)`,
  laptopM: `(min-width: ${size.laptopM}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktopS: `(min-width: ${size.desktopS}px)`,
  desktopM: `(min-width: ${size.desktopM}px)`,
  desktopL: `(min-width: ${size.desktopL}px)`
}
