import styles from "./Navigation.module.css";

import type React from "react";

type Props = {
  categories: Category[];
};

export const Navigation: React.FC<Props> = ({ categories }) => {
  return (
    <ul className={styles.container}>
      {categories.map(({ id, name }) => {
        const categoryId = `category-${id}`;
        return (
          <li key={categoryId}>
            <a href={"#" + categoryId}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};
