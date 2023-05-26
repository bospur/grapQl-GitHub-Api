import { makeAutoObservable } from "mobx";
import RootStore from "../rootStore/rootStore";
import {
  GitHubListItem,
  PageInfo,
  RepoInfo,
} from "../../ts/models/gitHubApiStore.model";

class GitHubApiStore {
  rootStore;
  gitHubRepoList: N<GitHubListItem[]> = null;
  searchValue = "";
  repoInfo: N<RepoInfo> = null;
  pageInfo: N<PageInfo> = null;
  afterCursor: N<string> = null;
  beforeCursor: N<string> = null;
  totalCout = 0;

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

  get first() {
    return this.afterCursor || (!this.afterCursor && !this.beforeCursor)
      ? 10
      : null;
  }

  get last() {
    return this.beforeCursor ? 10 : null;
  }
}

export default GitHubApiStore;
