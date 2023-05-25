import { FC } from "react";

import styles from "./LanguagesList.module.scss";
interface ILanguagesList {
  languages: {
    nodes: { name: string }[];
  };
}

const LanguagesList: FC<ILanguagesList> = ({ languages }) => {
  return (
    <div className={styles.languagesList}>
      <h3>Languages</h3>
      <ul>
        {languages.nodes.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;
