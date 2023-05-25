import { FC } from "react";
import { AiOutlineStar } from "react-icons/ai";

import styles from "./CardHeader.module.scss";
import { RepoInfo } from "../Card";

interface ICardHeader {
  data: RepoInfo;
}

const CardHeader: FC<ICardHeader> = ({ data }) => {
  return (
    <div className={styles.avatarBlock}>
      <img src={data.owner.avatarUrl} alt="Avatar" className={styles.avatar} />
      <div className={styles.info}>
        <div className={styles.userInfo}>
          <p className={styles.name}>{data.owner.login}</p>
          <a href={data.owner.url} target="_blank">
            {data.owner.url}
          </a>
        </div>
        <div className={styles.stars}>
          {data.stargazerCount}
          <AiOutlineStar />
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
