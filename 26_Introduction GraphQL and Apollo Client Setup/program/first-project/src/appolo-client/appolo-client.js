import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://saved-buck-97.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret':
      'KxzbqHK0EF7ja0OU7ZC4kNxji5R59zPyhTiZKj8VmLiYySvg6RVnjaYfFxQJ5Cv6',
  },
});

export default client;
