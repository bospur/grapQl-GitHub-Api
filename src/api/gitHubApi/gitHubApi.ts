import { gql } from "@apollo/client";

const gitHubApi = {
  getRepoList: gql`
    query searchRepo($name: String!, $cursor: String) {
      search(type: REPOSITORY, query: $name, first: 10, after: $cursor) {
        repositoryCount
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            ... on Repository {
              id
              name
              url
              stargazerCount
              createdAt
              owner {
                login
              }
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 1) {
                      edges {
                        node {
                          ... on Commit {
                            committedDate
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
  getRepoInfo: gql`
    query repository($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        name
        description
        stargazerCount
        createdAt
        languages(first: 10) {
          nodes {
            name
          }
        }
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 1) {
                edges {
                  node {
                    ... on Commit {
                      committedDate
                    }
                  }
                }
              }
            }
          }
        }
        owner {
          url
          login
          avatarUrl
        }
      }
    }
  `,
};

export default gitHubApi;
