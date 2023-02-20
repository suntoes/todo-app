import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('light-bg', 'light-bg')(props)
    }
  })
}

const fonts = {
  html: `'Roboto', sans-serif`
}

const components = {}

const colors = {
  'light-bg': '#E8EAED',
  white: '#E6E6E6',
  black: '#1A1A1A'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  colors,
  components,
  config,
  fonts,
  styles
})

export default theme
