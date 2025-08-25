type Category = {
  id: number;
  name: "Italian" | "French" | "German" | "Russian" | "Chinese" | "Japanese";
};

type Dish = {
  id: number;
  name: string;
  price: string;
  description: string;
  category: Category;
  image: string;
};
