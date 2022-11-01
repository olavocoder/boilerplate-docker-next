import PortoRoobertBold from 'assets/fonts/PortoRoobert-Bold.woff'
import PortoRoobertBold2 from 'assets/fonts/PortoRoobert-Bold.woff2'
import PortoRoobertMedium from 'assets/fonts/PortoRoobert-Medium.woff'
import PortoRoobertMedium2 from 'assets/fonts/PortoRoobert-Medium.woff2'
import PortoRoobertSemiBold from 'assets/fonts/PortoRoobert-SemiBold.woff'
import PortoRoobertSemiBold2 from 'assets/fonts/PortoRoobert-SemiBold.woff2'
import PortoRoobertBoldItalic from 'assets/fonts/PortoRoobertItalic-BoldItalic.woff'
import PortoRoobertBoldItalic2 from 'assets/fonts/PortoRoobertItalic-BoldItalic.woff2'
import PortoRoobertMediumItalic from 'assets/fonts/PortoRoobertItalic-MediumItalic.woff'
import PortoRoobertMediumItalic2 from 'assets/fonts/PortoRoobertItalic-MediumItalic.woff2'
import PortoRoobertSemiBoldItalic from 'assets/fonts/PortoRoobertItalic-SemiBoldItalic.woff'
import PortoRoobertSemiBoldItalic2 from 'assets/fonts/PortoRoobertItalic-SemiBoldItalic.woff2'
import { createGlobalStyle } from 'styled-components'

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Porto Roobert';
    src:
      url(${PortoRoobertBold2}) format('woff2'),
      url(${PortoRoobertBold}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Porto Roobert';
    src:
      url(${PortoRoobertSemiBold2}) format('woff2'),
      url(${PortoRoobertSemiBold}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Porto Roobert';
    src:
      url(${PortoRoobertSemiBoldItalic2}) format('woff2'),
      url(${PortoRoobertSemiBoldItalic}) format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Porto Roobert';
    src:
      url(${PortoRoobertMediumItalic2}) format('woff2'),
      url(${PortoRoobertMediumItalic}) format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Porto Roobert';
    src:
      url(${PortoRoobertMedium2}) format('woff2'),
      url(${PortoRoobertMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Porto Roobert';
    src:
      url(${PortoRoobertBoldItalic2}) format('woff2'),
      url(${PortoRoobertBoldItalic}) format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }
`

export default GlobalFonts
