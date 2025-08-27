import styles from "./DishCard.module.css";

import type React from "react";

type Props = {
  dish: Dish;
};

export const DishCard: React.FC<Props> = ({ dish }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h4 className={styles.title}>{dish.name}</h4>
        <p className={styles.description}>{dish.description}</p>
      </div>
      <footer className={styles.footer}>
        <span className={styles.priceTag}>{dish.price}</span>
      </footer>
    </div>
  );
};
