import { useState } from "react";
import { CategoryNavigation } from "../../features/CategoryNavigation";

import categoriesRaw from "@/shared/mocks/categories.json";
import dishesRaw from "@/shared/mocks/dishes.json";
import { MenuWidget } from "../../widgets/MenuWidget";

const categories = categoriesRaw as Category[];
const dishes = dishesRaw as Dish[];

export const MenuPage = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState<
    Category["id"] | undefined
  >(undefined);

  return (
    <>
      <CategoryNavigation
        categories={categories}
        currentCategoryId={currentCategoryId}
      />
      <MenuWidget
        cateogries={categories}
        dishes={dishes}
        onCategoryVisible={setCurrentCategoryId}
      />
    </>
  );
};
