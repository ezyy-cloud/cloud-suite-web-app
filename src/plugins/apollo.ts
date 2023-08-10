// Apollo
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'


const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: 'https://api.ezyy.cloud:2303',

  // Provide some optional constructor fields
  name: 'cloudsuites-webapp-client',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

export { apolloProvider, apolloClient };