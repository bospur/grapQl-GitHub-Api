/* eslint-disable react-refresh/only-export-components */
import { FC, useState } from "react";
import SearchInput from "../ui/SearchInput/SearchInput";

import styles from "./Search.module.scss";
import { observer } from "mobx-react-lite";
import rootStore from "../../stores/rootStore/rootStore";
import Spiner from "../ui/Spiner/Spiner";

const TITLE = "Interaction with github api";
interface ISearch {
  loading: boolean;
}

const Search: FC<ISearch> = ({ loading }) => {
  const { setKeysValues } = rootStore.gitHubApiStore;
  const [value, setValue] = useState("");

  const handleSearch = (value: string) => {
    setValue(value);
    setKeysValues({
      searchValue: value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>{TITLE}</h1>
      <div className={styles.searchWrapper}>
        <SearchInput
          value={value}
          onChange={handleSearch}
          placeholder="Enter repository name"
        />
        {loading && <Spiner />}
      </div>
    </div>
  );
};

export default observer(Search);
