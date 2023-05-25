/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite";
import styles from "./RepoList.module.scss";
import rootStore from "../../stores/rootStore/rootStore";
import RepoItem from "./RepoItem/RepoItem";

const RepoList = () => {
  const { gitHubRepoList } = rootStore.gitHubApiStore;

  if (!gitHubRepoList) return null;

  return (
    <ul className={styles.wrapper}>
      {gitHubRepoList?.map((item) => (
        <RepoItem key={item.node.id} data={item.node} />
      ))}
    </ul>
  );
};

export default observer(RepoList);
