import { BiArrowBack } from "react-icons/bi";
import Card from "../../componets/ui/Card/Card";

import { useQuery } from "@apollo/client";
import gitHubApi from "../../api/gitHubApi/gitHubApi";
import { Link, useParams } from "react-router-dom";
import Spiner from "../../componets/ui/Spiner/Spiner";

import styles from "./RepositoryPage.module.scss";

const RepositoryPage = () => {
  const { login, repositoryName } = useParams();

  const { data, loading } = useQuery(gitHubApi.getRepoInfo, {
    variables: {
      owner: login,
      name: repositoryName,
    },
  });

  if (loading)
    return (
      <div className={styles.wrapper}>
        <Spiner />
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.homeLink}>
        <BiArrowBack />
        Come back
      </Link>
      <Card data={data.repository} />
    </div>
  );
};

export default RepositoryPage;
