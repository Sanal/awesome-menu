import { InView } from "react-intersection-observer";
import { CategoryList } from "../CategoryList";
import styles from "./MenuList.module.css";

import type React from "react";

type Props = {
  cateogries: Category[];
  dishes: Dish[];
  onCategoryVisible: (id: Category["id"]) => void;
};

export const MenuList: React.FC<Props> = ({
  cateogries,
  dishes,
  onCategoryVisible,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.menuContainer}>
        {cateogries.map(({ id, name }) => {
          const categoryId = `category-${id}`;
          const categoryDishes = dishes.filter(
            ({ category }) => category.id === id
          );
          return (
            <li
              key={categoryId}
              id={categoryId}
            >
              <InView
                as="div"
                rootMargin="-50% 0% -50% 0%"
                onChange={(inView) => {
                  if (inView) {
                    onCategoryVisible(id);
                  }
                }}
              >
                <CategoryList category={{ id, name }} dishes={categoryDishes} />
              </InView>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
