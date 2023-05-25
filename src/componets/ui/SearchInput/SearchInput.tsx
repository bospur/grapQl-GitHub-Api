import { FC } from "react";

import styles from "./SearchInput.module.scss";

interface ISearchInput {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchInput: FC<ISearchInput> = ({ value, onChange, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
