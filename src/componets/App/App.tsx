import "./App.scss";
import { useQuery, gql } from "@apollo/client";

const GET_REPOSITORY = gql`
  query getRepositorys($login: String!) {
    user(login: $login) {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            stargazerCount
            url
          }
        }
      }
    }
  }
`;

function App() {
  const { data } = useQuery(GET_REPOSITORY, {
    variables: {
      login: "Bospur",
    },
  });

  console.log(data);
  return <div>GraphQl API GitHub</div>;
}

export default App;
