import GitHubApiStore from "../githubApiStore/githubApiStore";

class RootStore {
  gitHubApiStore;

  constructor() {
    this.gitHubApiStore = new GitHubApiStore(this);
  }
}

export default new RootStore();
