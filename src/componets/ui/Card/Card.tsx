import { FC } from "react";
import styles from "./Card.module.scss";
import { DefaultBranchRef } from "../../../ts/models/gitHubApiStore.model";
import CardHeader from "./CardHeader/CardHeader";
import TitleBlock from "./TitleBlock/TitleBlock";
import LanguagesList from "./LanguagesLIst/LanguagesList";

export type RepoInfo = {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  stargazerCount: number;
  owner: {
    login: string;
    url: string;
    avatarUrl: string;
  };
  languages: {
    nodes: { name: string }[];
  };
  defaultBranchRef: DefaultBranchRef;
};

interface ICard {
  data: RepoInfo;
}

const Card: FC<ICard> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <CardHeader data={data} />
      <TitleBlock name={data.name} description={data.description} />
      <p>
        last commit:{" "}
        {data.defaultBranchRef.target.history.edges[0].node.committedDate}
      </p>
      <LanguagesList languages={data.languages} />
    </div>
  );
};

export default Card;
