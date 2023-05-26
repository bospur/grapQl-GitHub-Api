/* eslint-disable react-refresh/only-export-components */
import { FC } from "react";
import { AiOutlineStar } from "react-icons/ai";

import styles from "./RepoItem.module.scss";
import { RepoItemType } from "../../../ts/models/gitHubApiStore.model";
import { Link } from "react-router-dom";

interface IRepoItem {
  data: RepoItemType;
}

const RepoItem: FC<IRepoItem> = ({ data }) => {
  if (!data) return null;

  return (
    <li className={styles.wrapper}>
      <div className={styles.header}>
        <Link
          className={styles.name}
          to={`repository/${data.owner.login}/${data.name}`}
        >
          {data.name}
        </Link>

        <div className={styles.stars}>
          {data.stargazerCount}
          <AiOutlineStar />
        </div>
      </div>
      <a href={data.url} className={styles.repoLink} target="_blank">
        {data.url}
      </a>
      <div className={styles.createdAt}>create date: {data.createdAt}</div>
      <div className={styles.createdAt}>
        last commit date:{" "}
        {data.defaultBranchRef?.target?.history?.edges[0].node.committedDate ??
          "none"}
      </div>
    </li>
  );
};

export default RepoItem;
