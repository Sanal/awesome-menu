import styles from "./Navigation.module.css";

import type React from "react";
import { NavigationLink } from "../NavigationLink";
import { useScrollSync } from "./hooks/useScrollSync";

type Props = {
  categories: Category[];
  currentCategoryId?: Category["id"];
};

export const Navigation: React.FC<Props> = ({
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
