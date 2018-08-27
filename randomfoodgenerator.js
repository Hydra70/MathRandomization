//Build an array of cooking methods
var cooking = [
	"slow cooked",
  "BBQ",
  "Boiled",
  "Fried",
  "Baked",
  "Microwaved",
  "Deep Fried",
  "Steamed"
];
//Build an array of foods
var foods = [
	"Noodle",
  "Musubi",
  "Steak",
  "Pork",
  "Carrots",
  "Oreo",
  "Bacon",
  "Spaghetti",
  "Eggs",
  "Ham",
  "Baby back Ribs",
  "Ice Cream",
  "Chicken",
  "Pizza",
  "Cake",
  "Fish",
  "Tomatoe",
  "Rice"
];
//Concat the cooking method and the food based on a random sequence
var kitchen = Math.floor(Math.random() * cooking.length);
var fridge = Math.floor(Math.random() * foods.length);
window.alert(cooking[kitchen] + " " + foods[fridge]);