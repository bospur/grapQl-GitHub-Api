/* eslint-disable react-refresh/only-export-components */
import { FC, useState } from "react";

import styles from "./Paginator.module.scss";
import { getPaginatorRange } from "./helpers";
import PagElement from "./PagElement/PagElement";
import { observer } from "mobx-react-lite";
import rootStore from "../../stores/rootStore/rootStore";

interface IPaginator {
  pages: number;
}

const Paginator: FC<IPaginator> = ({ pages }) => {
  const { pageInfo, setKeysValues } = rootStore.gitHubApiStore;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
    setKeysValues({
      beforeCursor: pageInfo ? pageInfo.startCursor : null,
      afterCursor: null,
    });
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    setKeysValues({
      afterCursor: pageInfo ? pageInfo.endCursor : null,
      beforeCursor: null,
    });
  };

  if (!pageInfo) return null;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.paginator}>
        {pageInfo?.hasPreviousPage && (
          <button onClick={handlePrev}>{"<"}</button>
        )}
        {getPaginatorRange(pages).map((item, i) => (
          <PagElement item={item} currentPage={currentPage} key={i} />
        ))}
        {pageInfo?.hasNextPage && currentPage < pages && (
          <button onClick={handleNext}>{">"}</button>
        )}
      </ul>
    </div>
  );
};

export default observer(Paginator);
