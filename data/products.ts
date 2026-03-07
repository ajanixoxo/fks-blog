export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  image: any;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Road Bike",
    model: "PEUGEOT - LRO1",
    price: 1299.99,
    image: require("@/assets/images/electric-bike2.png"),
    description: "The Peugeot LRO1 is a lightweight road bike designed for performance and comfort. It features a carbon fiber frame, Shimano Ultegra drivetrain, and disc brakes for reliable stopping power."
  },
  {
    id: "2",
    name: "Road Helmet",
    model: "SMITH-Trade",
    price: 899,
    image: require("@/assets/images/helmet.png"),
    description: "The Smith Trade helmet is a lightweight and aerodynamic helmet designed for road cycling. It features a carbon fiber frame, Shimano Ultegra drivetrain, and disc brakes for reliable stopping power."
  },
  {
    id: "3",
    name: "Road Bike",
    model: "Speed R3",
    price: 1099,
    image: require("@/assets/images/electric-bike.png"),
    description: "The Speed R3 is a lightweight road bike designed for performance and comfort. It features a carbon fiber frame, Shimano Ultegra drivetrain, and disc brakes for reliable stopping power."
  },
  {
    id: "4",
    name: "City Cruiser",
    model: "Urban Glide",
    price: 749,
    image: require("@/assets/images/electric-bike2.png"),
    description: "The Urban Glide is a lightweight road bike designed for performance and comfort. It features a carbon fiber frame, Shimano Ultegra drivetrain, and disc brakes for reliable stopping power."
  }
];
