import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({
    uri: "", // your API endpoint
  }),
  cache,
});

export default client;
