/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite";
import gitHubApi from "../../api/gitHubApi/gitHubApi";
import { useQuery } from "@apollo/client";
import rootStore from "../../stores/rootStore/rootStore";
import { useEffect } from "react";

import styles from "./Home.module.scss";
import Search from "../../componets/Search/Search";
import RepoList from "../../componets/RepoList/RepoList";
import Paginator from "../../componets/Paginator/Paginator";

const Home = () => {
  const { setKeysValues, searchValue, afterCursor, beforeCursor, last, first } =
    rootStore.gitHubApiStore;

  const { data, loading } = useQuery(gitHubApi.getRepoList, {
    variables: {
      name: `name: ${searchValue}`,
      afterCursor,
      beforeCursor,
      last,
      first,
    },
  });

  useEffect(() => {
    if (data)
      setKeysValues({
        gitHubRepoList: data.search.edges,
        pageInfo: data.search.pageInfo,
        totalCout: data.search.repositoryCount,
      });
  }, [data, setKeysValues]);

  return (
    <div className={styles.wrapper}>
      <Search loading={loading} />
      <hr />
      <RepoList />
      <Paginator pages={10} />
    </div>
  );
};

export default observer(Home);
