import { makeAutoObservable } from "mobx";
import RootStore from "../rootStore/rootStore";
import { GitHubListItem, RepoInfo } from "../../ts/models/gitHubApiStore.model";

class GitHubApiStore {
  rootStore;
  gitHubRepoList: N<GitHubListItem[]> = null;
  searchValue = "";
  repoInfo: N<RepoInfo> = null;
  pageInfo: N<any> = null;
  cursor: N<string> = null;

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
    });
    this.rootStore = rootStore;
  }

  setKeysValues = <K extends keyof this>(params: {
    [key in K]: this[key];
  }) => {
    for (const key in params) {
      this[key] = params[key];
    }
  };
}

export default GitHubApiStore;
