import InventoryItem from "./models/InventoryItem";

const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10.0,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1.0,
    },
    quantity: 20,
  },
];

const calcInventoryValue = (array: InventoryItem[]): number => {
  let total = 0;
  if (array.length === 0) {
    return 0;
  } else {
    array.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }
};
console.log(calcInventoryValue(inventory));
