import { gql } from "@apollo/client";

const gitHubApi = {
  getRepoList: gql`
    query searchRepo(
      $name: String!
      $afterCursor: String
      $beforeCursor: String
      $first: Int
      $last: Int
    ) {
      search(
        type: REPOSITORY
        query: $name
        first: $first
        last: $last
        after: $afterCursor
        before: $beforeCursor
      ) {
        repositoryCount
        pageInfo {
          hasPreviousPage
          startCursor
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
