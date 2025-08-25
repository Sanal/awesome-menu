import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import "./App.css";

import categories from "./categories.json";

function App() {
  return (
    <>
      <Header />
      <Navigation categories={categories} />
    </>
  );
}

export default App;
