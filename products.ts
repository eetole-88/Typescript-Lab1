import Product from "./models/Product";

const products: Product[] = [
  {
    name: "book",
    price: 25,
  },
  {
    name: "latte",
    price: 5,
  },
  {
    name: "pastry",
    price: 3,
  },
  {
    name: "notebook",
    price: 15,
  },
];

const calcAverageProductPrice = (array: Product[]): number => {
  let total = 0;
  array.forEach((item) => {
    total += item.price;
  });
  return total / array.length;
};
console.log(calcAverageProductPrice(products));
