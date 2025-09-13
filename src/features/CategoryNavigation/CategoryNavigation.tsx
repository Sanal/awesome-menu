import type React from "react";
import { NavigationLink } from "./ui/NavigationLink";
import { useScrollSync } from "./hooks/useScrollSync";
import styles from "./CategoryNavigation.module.css";

type Props = {
  categories: Category[];
  currentCategoryId?: Category["id"];
};

export const CategoryNavigation: React.FC<Props> = ({
  categories,
  currentCategoryId,
}) => {
  const { containerRef, targetRef } = useScrollSync(currentCategoryId);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.wrapper}>
        <ul className={styles.navigationList}>
          {categories.map((category) => (
            <NavigationLink
              category={category}
              currentCategoryId={currentCategoryId}
              targetRef={targetRef}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
