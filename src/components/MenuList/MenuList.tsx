import type React from "react";
import styles from "./MenuList.module.css";

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
            <h3>{name}</h3>
            <ul className={styles.categoryList}>
              {categoryDishes.map((dish) => {
                const dishId = `dish-${dish.id}`;
                return (
                  <li key={dishId}>
                    <h4>{dish.name}</h4>
                    <p>{dish.description}</p>
                    <p>{dish.price}</p>
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
