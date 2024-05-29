export const colors={
 COLOR_PRIMARY:"#F96163",
 COLOR_LIGHT:"#FFF",
 COLOR_DARK:"#000",
 COLOR_DARK_ALT:"#262626"
};

//DATA FOR CATEGORIES FILTER

export const categories=[
    {
    id:"01",
    category:"Breakfast"
    },
    {
    id:"02",
    category:"Lunch"
    },
    {
    id:"03",
    category:"Dinner"
    },
    {
    id:"04",
    category:"Italian"
    },
    {
    id:"05",
    category:"Desserts"
    },
    {
    id:"06",
    category:"Vegetarian"
    },
    {
    id:"07",
    category:"Seafood"
    },
    {
    id:"07",
    category:"Asian"
    },
]
export const recipeList = [
    {
        id: "01",
        name: "Pancakes",
        image: require("../../assets/images/food_20.png"),
        rating: "4.5",
        ingredients: ["Flour", "Milk", "Eggs", "Maple syrup"],
        time: "20 mins",
        difficulty: "Easy",
        calories: "350 cal",
        description: "Fluffy and delicious pancakes perfect for a quick breakfast.",
        steps: [
            "In a bowl, mix flour, milk, and eggs until smooth.",
            "Heat a lightly oiled griddle or frying pan over medium-high heat.",
            "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
            "Brown on both sides and serve hot with maple syrup."
        ]
    },
    {
        id: "02",
        name: "Caesar Salad",
        image: require("../../assets/images/food_11.png"),
        rating: "4.3",
        ingredients: ["Romaine lettuce", "Parmesan cheese", "Caesar dressing", "Croutons"],
        time: "15 mins",
        difficulty: "Easy",
        calories: "250 cal",
        description: "A classic Caesar Salad with crispy croutons and creamy dressing.",
        steps: [
            "Chop the romaine lettuce and place in a large bowl.",
            "Add Caesar dressing and toss to coat the lettuce evenly.",
            "Top with grated Parmesan cheese and croutons.",
            "Serve immediately."
        ]
    },
    {
        id: "03",
        name: "Spaghetti Carbonara",
        image: require("../../assets/images/food_10.png"),
        rating: "4.6",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese"],
        time: "30 mins",
        difficulty: "Medium",
        calories: "560 cal",
        description: "A rich and creamy pasta dish with pancetta and Parmesan cheese.",
        steps: [
            "Cook the spaghetti according to package instructions.",
            "In a separate pan, cook pancetta until crispy.",
            "In a bowl, beat the eggs and mix with grated Parmesan cheese.",
            "Drain the spaghetti and return to the pot. Add pancetta and egg mixture, stirring quickly to create a creamy sauce.",
            "Serve immediately with additional Parmesan cheese."
        ]
    },
    {
        id: "04",
        name: "Chicken Teriyaki",
        image: require("../../assets/images/food_9.png"),
        rating: "4.4",
        ingredients: ["Chicken breast", "Soy sauce", "Sugar", "Ginger", "Garlic"],
        time: "35 mins",
        difficulty: "Medium",
        calories: "450 cal",
        description: "Juicy chicken breast glazed with a sweet and savory teriyaki sauce.",
        steps: [
            "Cut chicken breast into bite-sized pieces.",
            "In a bowl, mix soy sauce, sugar, grated ginger, and minced garlic to create the teriyaki sauce.",
            "Heat a pan over medium heat and cook the chicken until browned.",
            "Pour the teriyaki sauce over the chicken and cook until the sauce thickens.",
            "Serve with rice or vegetables."
        ]
    },
    {
        id: "05",
        name: "Chocolate Cake",
        image: require("../../assets/images/food_8.png"),
        rating: "4.8",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Butter", "Sugar"],
        time: "60 mins",
        difficulty: "Hard",
        calories: "600 cal",
        description: "A rich and moist chocolate cake, perfect for special occasions.",
        steps: [
            "Preheat the oven to 350°F (175°C).",
            "In a bowl, mix flour, cocoa powder, and sugar.",
            "Add eggs and melted butter, and mix until smooth.",
            "Pour the batter into a greased baking pan.",
            "Bake for 35-40 minutes or until a toothpick inserted into the center comes out clean.",
            "Let cool before serving."
        ]
    },
    {
        id: "06",
        name: "Tom Yum Soup",
        image: require("../../assets/images/food_7.png"),
        rating: "4.7",
        ingredients: ["Shrimp", "Lemongrass", "Lime juice", "Chili peppers", "Mushrooms"],
        time: "40 mins",
        difficulty: "Medium",
        calories: "300 cal",
        description: "A spicy and sour Thai soup with shrimp and fragrant herbs.",
        steps: [
            "In a pot, bring water to a boil and add lemongrass, lime juice, and chili peppers.",
            "Add mushrooms and cook for a few minutes.",
            "Add shrimp and cook until they turn pink.",
            "Serve hot, garnished with fresh cilantro."
        ]
    },
    {
        id: "07",
        name: "Beef Tacos",
        image: require("../../assets/images/food_5.png"),
        rating: "4.5",
        ingredients: ["Ground beef", "Taco shells", "Cheddar cheese", "Lettuce", "Tomato"],
        time: "25 mins",
        difficulty: "Easy",
        calories: "400 cal",
        description: "Flavorful ground beef tacos with fresh toppings.",
        steps: [
            "Cook ground beef in a pan until browned.",
            "Season with salt, pepper, and taco seasoning.",
            "Fill taco shells with the cooked beef.",
            "Top with shredded cheddar cheese, lettuce, and diced tomatoes.",
            "Serve immediately."
        ]
    },
    {
        id: "08",
        name: "Sushi Rolls",
        image: require("../../assets/images/food_4.png"),
        rating: "4.6",
        ingredients: ["Sushi rice", "Nori", "Fresh fish", "Cucumber", "Avocado"],
        time: "50 mins",
        difficulty: "Hard",
        calories: "300 cal",
        description: "Homemade sushi rolls with fresh fish and vegetables.",
        steps: [
            "Cook sushi rice according to package instructions and let cool.",
            "Place a sheet of nori on a bamboo sushi mat.",
            "Spread a layer of sushi rice over the nori.",
            "Add slices of fresh fish, cucumber, and avocado.",
            "Roll the sushi tightly using the bamboo mat.",
            "Slice into pieces and serve with soy sauce and wasabi."
        ]
    },
];
