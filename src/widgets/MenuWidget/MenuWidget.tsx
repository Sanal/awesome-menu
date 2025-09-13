import type React from "react";
import { InView } from "react-intersection-observer";
import { CategoryList } from "@/entities/Category";
import styles from "./MenuWidget.module.css";

type Props = {
  cateogries: Category[];
  dishes: Dish[];
  onCategoryVisible: (id: Category["id"]) => void;
};

export const MenuWidget: React.FC<Props> = ({
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
            <li key={categoryId} id={categoryId} className={styles.menuItem}>
              <InView
                as="div"
                rootMargin="-25% 0% -75% 0%"
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
