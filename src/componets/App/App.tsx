import "./App.scss";
import { useQuery, gql } from "@apollo/client";

const GET_REPOSITORY = gql`
  query searchRepo($name: String!) {
    search(type: REPOSITORY, query: $name, first: 100) {
      userCount
      edges {
        node {
          ... on Repository {
            id
            name
            url
            stargazerCount
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

function App() {
  const { data } = useQuery(GET_REPOSITORY, {
    variables: {
      name: "name:",
    },
  });

  console.log(data);
  return <div>GraphQl API GitHub</div>;
}

export default App;
