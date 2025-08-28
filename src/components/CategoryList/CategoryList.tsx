import { DishCard } from "../DishCard";
import styles from "./CategoryList.module.css";

import type React from "react";

type Props = {
  category: Category;
  dishes: Dish[];
};

export const CategoryList: React.FC<Props> = ({ category, dishes }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.categoryTitle}>{category.name}</h3>
      <ul className={styles.categoryList}>
        {dishes.map((dish) => {
          const dishId = `dish-${dish.id}`;
          return (
            <li key={dishId}>
              <DishCard dish={dish} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
