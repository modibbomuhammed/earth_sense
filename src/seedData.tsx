interface Zephyr {
  name: string;
  type: "Standard" | "Enhanced";
  batteryPercentage: number;
  currentlyOwned: boolean;
  NO2: number;
  PM25: number;
  color?: string;
}

interface Colour {
  value: number;
  hex: string;
}

export const zephyrs: Zephyr[] = [
  {
    name: "Bloomfield Road",
    type: "Standard",
    batteryPercentage: 80,
    currentlyOwned: false,
    NO2: 8,
    PM25: 4,
  },
  {
    name: "Mason Avenue",
    type: "Enhanced",
    batteryPercentage: 20,
    currentlyOwned: true,
    NO2: 6,
    PM25: 5,
  },
  {
    name: "Limewood Grove",
    type: "Enhanced",
    currentlyOwned: true,
    batteryPercentage: 50,
    NO2: 10,
    PM25: 10,
  },
  {
    name: "Titan Strait",
    type: "Standard",
    currentlyOwned: false,
    batteryPercentage: 60,
    NO2: 8,
    PM25: 2,
  },
  {
    name: "Deansgate",
    type: "Enhanced",
    currentlyOwned: true,
    batteryPercentage: 70,
    NO2: 3,
    PM25: 3,
  },
  {
    name: "Oscar Grove",
    type: "Enhanced",
    currentlyOwned: false,
    batteryPercentage: 30,
    NO2: 6,
    PM25: 3,
  },
  {
    name: "Pattan Way",
    type: "Standard",
    currentlyOwned: true,
    batteryPercentage: 50,
    NO2: 8,
    PM25: 2,
  },
  {
    name: "Stony Brooks",
    type: "Standard",
    currentlyOwned: true,
    batteryPercentage: 10,
    NO2: 1,
    PM25: 1,
  },
  {
    name: "Heather Crescent",
    type: "Standard",
    batteryPercentage: 80,
    currentlyOwned: false,
    NO2: 3,
    PM25: 4,
  },
  {
    name: "Terrance Way",
    type: "Enhanced",
    batteryPercentage: 20,
    currentlyOwned: true,
    NO2: 4,
    PM25: 6,
  },
  {
    name: "Flint Road",
    type: "Standard",
    currentlyOwned: true,
    batteryPercentage: 50,
    NO2: 3,
    PM25: 2,
  },
  {
    name: "Holden Lane",
    type: "Standard",
    currentlyOwned: false,
    batteryPercentage: 60,
    NO2: 3,
    PM25: 6,
  },
  {
    name: "Abbey Station",
    type: "Standard",
    currentlyOwned: true,
    batteryPercentage: 70,
    NO2: 9,
    PM25: 7,
  },
  {
    name: "Morton Road",
    type: "Standard",
    currentlyOwned: false,
    batteryPercentage: 30,
    NO2: 10,
    PM25: 8,
  },
  {
    name: "Cherrytree Crossing",
    type: "Standard",
    currentlyOwned: true,
    batteryPercentage: 50,
    NO2: 1,
    PM25: 2,
  },
  {
    name: "Oultan Parkway",
    type: "Enhanced",
    currentlyOwned: true,
    batteryPercentage: 10,
    NO2: 2,
    PM25: 2,
  },
];

export const colours: Colour[] = [
  {
    value: 1,
    hex: "#9EFF9C",
  },
  {
    value: 2,
    hex: "#31FF00",
  },
  {
    value: 3,
    hex: "#31CF00",
  },
  {
    value: 4,
    hex: "#FFFF00",
  },
  {
    value: 5,
    hex: "#FFCF00",
  },
  {
    value: 6,
    hex: "#FF9A00",
  },
  {
    value: 7,
    hex: "#FF5C01",
  },
  {
    value: 8,
    hex: "#FF0000",
  },
  {
    value: 9,
    hex: "#990000",
  },
  {
    value: 10,
    hex: "#64002B",
  },
];
