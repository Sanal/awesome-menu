import { handleAnchorScroll } from "./handelAnchorScroll";
import styles from "./NavigationLink.module.css";

type Props = {
  category: Category;
  currentCategoryId?: Category["id"];
  targetRef?: React.Ref<HTMLLIElement>;
};

export const NavigationLink: React.FC<Props> = ({
  category,
  currentCategoryId,
  targetRef,
}) => {
  const { id, name } = category;
  const categoryId = `category-${id}`;
  const isCurrent = id === currentCategoryId;

  return (
    <li key={categoryId} ref={isCurrent ? targetRef : null}>
      <a
        href={"#" + categoryId}
        onClick={handleAnchorScroll}
        aria-current={isCurrent ? "true" : undefined}
        className={`${styles.container} ${isCurrent ? styles.currentLink : ""}`}
      >
        {name}
      </a>
    </li>
  );
};
