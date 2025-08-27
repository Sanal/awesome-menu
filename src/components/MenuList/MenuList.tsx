import styles from "./MenuList.module.css";
import { DishCard } from "../DishCard";

import type React from "react";

type Props = {
  cateogries: Category[];
  dishes: Dish[];
};

export const MenuList: React.FC<Props> = ({ cateogries, dishes }) => {
  return (
    <ul className={styles.container}>
      {cateogries.map(({ id, name }) => {
        const categoryId = `category-${id}`;
        const categoryDishes = dishes.filter(
          ({ category }) => category.id === id
        );
        return (
          <li
            key={categoryId}
            id={categoryId}
            className={styles.categoryContainer}
          >
            <h3 className={styles.categoryTitle}>{name}</h3>
            <ul className={styles.categoryList}>
              {categoryDishes.map((dish) => {
                const dishId = `dish-${dish.id}`;
                return (
                  <li key={dishId}>
                    <DishCard dish={dish} />
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
