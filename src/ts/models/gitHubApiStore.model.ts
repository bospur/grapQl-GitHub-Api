export type DefaultBranchRef = {
  target: {
    history: {
      edges: {
        node: {
          committedDate: string;
        };
      }[];
    };
  };
};

type Owner = {
  login: string;
};

export type RepoItemType = {
  id: string;
  name: string;
  owner: Owner;
  url: string;
  stargazerCount: number;
  createdAt: string;
  defaultBranchRef: DefaultBranchRef;
};

export type GitHubListItem = {
  node: RepoItemType;
};

export type RepoInfo = {
  owner: string;
  name: string;
};
