import { Global } from '@emotion/react'

const GlobalStyle = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Roboto';
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Roboto-Regular.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Roboto';
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Roboto-Bold.ttf') format('truetype');
      }
    `}
  />
)

export default GlobalStyle
