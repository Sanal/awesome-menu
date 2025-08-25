import type React from "react";

type Props = {
  categories: Category[];
};

export const Navigation: React.FC<Props> = ({ categories }) => {
  return (
    <ul>
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
