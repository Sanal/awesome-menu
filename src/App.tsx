import { Navigation } from "./components/Navigation";
import { MenuList } from "./components/MenuList";
import styles from "./App.module.css";

import categoriesRaw from "./categories.json";
import dishesRaw from "./dishes.json";
import { useState } from "react";

const categories = categoriesRaw as Category[];
const dishes = dishesRaw as Dish[];

function App() {
  const [currentCategoryId, setCurrentCategoryId] = useState<
    Category["id"] | undefined
  >(undefined);

  return (
    <div className={styles.container}>
      <Navigation
        categories={categories}
        currentCategoryId={currentCategoryId}
      />
      <MenuList
        cateogries={categories}
        dishes={dishes}
        onCategoryVisible={setCurrentCategoryId}
      />
    </div>
  );
}

export default App;
