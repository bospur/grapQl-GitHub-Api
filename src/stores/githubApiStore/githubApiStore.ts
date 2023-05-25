import { makeAutoObservable } from "mobx";
import RootStore from "../rootStore/rootStore";

class GitHubApiStore {
  rootStore;

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
    });
    this.rootStore = rootStore;
  }
}

export default GitHubApiStore;
