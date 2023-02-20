import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '../components/main'
import Chakra from '../components/chakra'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const client = new QueryClient()

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Chakra cookies={pageProps.cookies}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Chakra>
    </QueryClientProvider>
  )
}

export default Website
