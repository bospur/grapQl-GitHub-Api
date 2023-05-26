import { FC } from "react";
import styles from "./PagElement.module.scss";
import classNames from "classnames";

interface IPagElement {
  item: number | string;
  currentPage: number;
  handelChange?: SetState<number>;
}

const PagElement: FC<IPagElement> = ({ item, currentPage, handelChange }) => {
  const pageStyles = classNames({
    [styles.page]: true,
    [styles.isActive]: currentPage === item,
  });

  return (
    <li className={pageStyles} onClick={() => handelChange(item)}>
      {item}
    </li>
  );
};

export default PagElement;
