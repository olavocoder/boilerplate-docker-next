import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import { render } from '@testing-library/react'

const customRender = (ui, { ...renderOptions }) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
