import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import "./assets/styles/index.scss";
import App from "./componets/App/App";
import { setContext } from "@apollo/client/link/context";

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;

// Create the http link
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = "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";

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const container: any = document.getElementById("root"),
  root = createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
