import Head from 'next/head'
import { Box } from '@chakra-ui/react'

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="suntoes" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:title" content="Todo App" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Todo App" />
        <meta name="twitter:creator" content="Todo App" />
        <meta name="og:title" content="Todo App" />
        <meta property="og:type" content="website" />
        <title>Todo App</title>
      </Head>

      {children}
    </Box>
  )
}

export default Main
