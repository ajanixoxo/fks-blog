export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  image: any;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Electric Bike",
    model: "E-Rider Pro",
    price: 1299,
    image: require("@/assets/images/electric-bike2.png"),
  },
  {
    id: "2",
    name: "Mountain Bike",
    model: "Trail X500",
    price: 899,
    image: require("@/assets/images/helmet.png"),
  },
  {
    id: "3",
    name: "Road Bike",
    model: "Speed R3",
    price: 1099,
    image: require("@/assets/images/electric-bike.png"),
  },
  {
    id: "4",
    name: "City Cruiser",
    model: "Urban Glide",
    price: 749,
    image: require("@/assets/images/electric-bike2.png"),
  }
];
