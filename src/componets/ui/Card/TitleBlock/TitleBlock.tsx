import { FC } from "react";

import styles from "./TitleBlock.module.scss";

interface ITitleBlock {
  name: string;
  description: string;
}

const TitleBlock: FC<ITitleBlock> = ({ name, description }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{name}</h2>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default TitleBlock;
