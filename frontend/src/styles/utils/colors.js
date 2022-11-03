import theme from 'styles/theme'

export const lightColors = {
  black: '#000',
  white: '#FFF',
  gray: '#CCC',
  primary: {
    100: '#0046C0', //100% (Intensidade)
    85: '#2662C9', // 85%
    75: '#1381E2', // 75%
    70: '#00A1FC', // 70% // Primary
    65: '#31B5FC', // 65%
    60: '#66CAFC', // 60%
    45: '#8CD7FD', // 45%
    30: '#B3E4FD', // 30%
    15: '#D1EFFE', // 15%
    5: '#EEF9FF' // 05%
  },
  secondary: {
    lightest: '#DBC7FF',
    light: '#B68FFF',
    base: '#8645FF',
    dark: '#48316D'
  },
  neutral: {
    offwhite: '#EBF1EC',
    offblack: '#C8C8C8',
    100: '#FFFFFF',
    85: '#F7F7F7',
    75: '#E0E0E0',
    70: '#C8C8C8',
    65: '#B3B3B3',
    60: '#999999',
    45: '#808080',
    30: '#5F5F5F',
    15: '#404040',
    5: '#1F1F1F',
    0: '#000000'
  },
  green: {
    lightest: '#C0F0D3',
    light: '#80E0A8',
    base: '#2CC6E',
    dark: '#01653B',
    darknes: '#034D2E'
  },
  red: {
    lightest: '#FFCDC6',
    light: '#FF9C8C',
    base: '#FF5A40',
    dark: '#A6341D',
    darknes: '#842310'
  },
  yellow: {
    lightest: '#FFCDC6',
    light: '#FF9C8C',
    base: '#FFA40',
    dark: '#A6341D',
    darknes: '#842310'
  }
}

export const darkColors = {
  black: '#000',
  white: '#FFF',
  gray: '#CCC',
  primary: {
    5: '#0046C0', //100% (Intensidade)
    15: '#2662C9', // 85%
    30: '#1381E2', // 75%
    45: '#00A1FC', // 70%
    60: '#31B5FC', // 65%
    65: '#66CAFC', // 60%
    70: '#8CD7FD', // 45%
    75: '#B3E4FD', // 30%
    85: '#D1EFFE', // 15%
    100: '#EEF9FF' // 05%
  },
  secondary: {
    dark: '#DBC7FF',
    base: '#B68FFF',
    light: '#8645FF',
    lightest: '#48316D'
  },
  neutral: {
    offblack: '#EBF1EC',
    offwhite: '#C8C8C8',
    0: '#FFFFFF',
    5: '#F7F7F7',
    15: '#E0E0E0',
    30: '#C8C8C8',
    45: '#B3B3B3',
    60: '#999999',
    65: '#808080',
    70: '#5F5F5F',
    75: '#404040',
    85: '#1F1F1F',
    100: '#000000'
  },
  green: {
    darknes: '#C0F0D3',
    dark: '#80E0A8',
    base: '#2CC6E',
    light: '#01653B',
    lightest: '#034D2E'
  },
  red: {
    darknes: '#FFCDC6',
    dark: '#FF9C8C',
    base: '#FF5A40',
    light: '#A6341D',
    lightest: '#842310'
  },
  yellow: {
    darknes: '#FFCDC6',
    dark: '#FF9C8C',
    base: '#FFA40',
    light: '#A6341D',
    lightest: '#842310'
  }
}

export const SetTheme = (props) => {
  const themeActive = props.activeTheme

  setColors(themeActive)

  return null
}

const setColors = (index) => {
  let colors
  if (index == 0) {
    colors = lightColors
  } else {
    colors = darkColors
  }

  theme.colors = colors

  return colors
}
