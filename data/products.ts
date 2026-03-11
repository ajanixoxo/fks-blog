export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  image: any;
  description: string;
  specifications: string;

}

export const products: Product[] = [
  {
    id: "1",
    name: "Road Bike",
    model: "PEUGEOT - LRO1",
    price: 1299.99,
    image: require("@/assets/images/electric-bike2.png"),
    description: "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    specifications: "",
  },
  {
    id: "2",
    name: "Road Helmet",
    model: "SMITH-Trade",
    price: 899,
    image: require("@/assets/images/helmet.png"),
    description: "The Smith Trade helmet is a lightweight and aerodynamic helmet designed for road cycling. It features a carbon fiber frame, Shimano Ultegra drivetrain, and disc brakes for reliable stopping power.",
    specifications: ""
  },
  {
    id: "3",
    name: "Road Bike",
    model: "Speed R3",
    price: 1099,
    image: require("@/assets/images/electric-bike.png"),
    description: "The Speed R3 is a lightweight road bike designed for performance and comfort. It features a carbon fiber frame, Shimano Ultegra drivetrain, and disc brakes for reliable stopping power.",
    specifications: ""
  },
  {
    id: "4",
    name: "City Cruiser",
    model: "Urban Glide",
    price: 749,
    image: require("@/assets/images/electric-bike2.png"),
    description: "The Urban Glide is a lightweight road bike designed for performance and comfort. It features a carbon fiber frame, Shimano Ultegra drivetrain, and disc brakes for reliable stopping power.",
    specifications: ""
  }
];
