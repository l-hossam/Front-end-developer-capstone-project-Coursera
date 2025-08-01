import salad from "../components/assets/salad.jpg";
import bruschetta from "../components/assets/bruschetta1.jpg";
import creme from "../components/assets/creme.jpg";

const specialMenus = [
  {
    index: 1,
    title: "Greek Salad",
    price: "$12.99",
    description:"The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    order: "Order a delivery",
    location: salad,
  },
  {
    index: 2,
    title: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
    order: "Order a delivery",
    location: bruschetta,
  },
  {
    index: 3,
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined just an extra word .",
    order: "Order a delivery",
    location: creme,
  },
];

export default specialMenus;
