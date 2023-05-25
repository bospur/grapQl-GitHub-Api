import { FC, useState } from "react";

import styles from "./Paginator.module.scss";
import { getPaginatorRange } from "./helpers";
import PagElement from "./PagElement/PagElement";

interface IPaginator {
  pages: number;
  pageCount: number;
}

const Paginator: FC<IPaginator> = ({ pages, pageCount }) => {
  const [paginationElemets, setPaginationElemets] = useState([
    ...getPaginatorRange(pages),
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.paginator}>
        {paginationElemets.map((item, i) => (
          <PagElement
            item={item}
            currentPage={currentPage}
            key={i}
            handelChange={setCurrentPage}
          />
        ))}
      </ul>
    </div>
  );
};

export default Paginator;
