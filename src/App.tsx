import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { MenuList } from "./components/MenuList";
import "./App.css";

import categoriesRaw from "./categories.json";
import dishesRaw from "./dishes.json";

const categories = categoriesRaw as Category[];
const dishes = dishesRaw as Dish[];

function App() {
  return (
    <>
      <Header />
      <Navigation categories={categories} />
      <MenuList cateogries={categories} dishes={dishes} />
    </>
  );
}

export default App;
