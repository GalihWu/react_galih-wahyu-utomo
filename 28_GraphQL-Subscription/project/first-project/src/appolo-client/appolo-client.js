import { ApolloClient, InMemoryCache } from '@apollo/client';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://saved-buck-97.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'KxzbqHK0EF7ja0OU7ZC4kNxji5R59zPyhTiZKj8VmLiYySvg6RVnjaYfFxQJ5Cv6',
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://saved-buck-97.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
        'x-hasura-admin-secret':
          'KxzbqHK0EF7ja0OU7ZC4kNxji5R59zPyhTiZKj8VmLiYySvg6RVnjaYfFxQJ5Cv6',
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
