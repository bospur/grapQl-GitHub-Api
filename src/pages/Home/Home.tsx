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
  const { setKeysValues, searchValue } = rootStore.gitHubApiStore;

  const { data, loading } = useQuery(gitHubApi.getRepoList, {
    variables: {
      name: `name: ${searchValue}`,
    },
  });

  useEffect(() => {
    if (data)
      setKeysValues({
        gitHubRepoList: data.search.edges,
      });
  }, [data, setKeysValues]);

  return (
    <div className={styles.wrapper}>
      <Search loading={loading} />
      <hr />
      <Paginator pages={10} pageCount={10} />
      <RepoList />
    </div>
  );
};

export default observer(Home);
