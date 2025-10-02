import { createContext, useState } from "react";

export const RecipiesContext = createContext(null);

function Recipe(prpops) {
  const [data, setData] = useState([
    {
      id: "xyz",
      recipeName: "Spaghetti Carbonara",
      url: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      recipeDesc:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      recipeIngredients:
        "Spaghetti, Eggs, Parmesan cheese, Pancetta, Black pepper, Salt",
      chiefName: "Chef Mario Rossi",
      categories: "Dinner, Italian",
    },
    {
      id: "bf_taco_02",
      recipeName: "Classic Beef Tacos",
      url: "https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeDesc:
        "Flavorful ground beef served in a crispy taco shell with fresh toppings like lettuce, cheese, and salsa.",
      recipeIngredients:
        "Ground beef, Taco shells, Lettuce, Tomato, Cheddar cheese, Onion, Taco seasoning",
      chiefName: "Chef Carlos Garcia",
      categories: "Dinner, Mexican, Quick",
    },
    {
      id: "gr_curry_03",
      recipeName: "Thai Green Curry",
      url: "https://images.pexels.com/photos/6061920/pexels-photo-6061920.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeDesc:
        "A vibrant and aromatic curry made with green chili paste, coconut milk, chicken, and vegetables.",
      recipeIngredients:
        "Chicken breast, Coconut milk, Green curry paste, Bamboo shoots, Bell pepper, Basil leaves",
      chiefName: "Chef Malee Srisuk",
      categories: "Dinner, Thai, Curry",
    },
    {
      id: "ch_brgr_04",
      recipeName: "Classic Cheeseburger",
      url: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeDesc:
        "A juicy beef patty grilled to perfection, topped with melted cheese, and served on a toasted bun.",
      recipeIngredients:
        "Ground beef, Burger buns, Cheddar cheese, Lettuce, Tomato, Onion, Pickles",
      chiefName: "Chef Frank Miller",
      categories: "Lunch, American, Grilling",
    },
    {
      id: "sushi_05",
      recipeName: "California Sushi Roll",
      url: "https://images.pexels.com/photos/7259303/pexels-photo-7259303.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeDesc:
        "A popular inside-out sushi roll with imitation crab, avocado, and cucumber, often rolled in toasted sesame seeds.",
      recipeIngredients:
        "Sushi rice, Nori, Imitation crab, Avocado, Cucumber, Sesame seeds",
      chiefName: "Chef Kaito Tanaka",
      categories: "Lunch, Japanese, Seafood",
    },
    {
      id: "choc_cake_06",
      recipeName: "Chocolate Lava Cake",
      url: "https://images.pexels.com/photos/3762284/pexels-photo-3762284.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeDesc:
        "A decadent individual chocolate cake with a gooey, molten chocolate center that flows out when cut.",
      recipeIngredients:
        "Dark chocolate, Butter, Eggs, Sugar, Flour, Cocoa powder",
      chiefName: "Chef Amelie Dubois",
      categories: "Dessert, Baking, French",
    },
    {
      id: "mrg_pza_07",
      recipeName: "Margherita Pizza",
      url: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeDesc:
        "A simple yet delicious pizza topped with San Marzano tomatoes, fresh mozzarella, fresh basil, salt, and extra-virgin olive oil.",
      recipeIngredients:
        "Pizza dough, San Marzano tomatoes, Fresh mozzarella, Basil, Olive oil, Salt",
      chiefName: "Chef Gino Esposito",
      categories: "Dinner, Italian, Pizza",
    },
    {
      id: "grk_sld_08",
      recipeName: "Greek Salad",
      url: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeDesc:
        "A refreshing salad with juicy tomatoes, crisp cucumber, red onion, Kalamata olives, and feta cheese.",
      recipeIngredients:
        "Tomatoes, Cucumber, Red onion, Feta cheese, Kalamata olives, Olive oil, Oregano",
      chiefName: "Chef Eleni Papadopoulos",
      categories: "Lunch, Salad, Greek, Vegetarian",
    },
    {
      id: "paella_09",
      recipeName: "Seafood Paella",
      url: "https://images.pexels.com/photos/10738010/pexels-photo-10738010.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeDesc:
        "A traditional Spanish rice dish from Valencia, cooked with saffron, shrimp, mussels, and other seafood in a large shallow pan.",
      recipeIngredients:
        "Bomba rice, Saffron, Shrimp, Mussels, Calamari, Bell peppers, Tomato",
      chiefName: "Chef Javier Torres",
      categories: "Dinner, Spanish, Seafood",
    },
    {
      id: "pancakes_10",
      recipeName: "Fluffy Buttermilk Pancakes",
      url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      recipeDesc:
        "A breakfast classic, these pancakes are light, airy, and perfect with a drizzle of maple syrup and fresh berries.",
      recipeIngredients:
        "Flour, Buttermilk, Egg, Sugar, Baking powder, Butter, Maple syrup",
      chiefName: "Chef Susan White",
      categories: "Breakfast, American",
    },
    {
      id: "xyzv",
      recipeName: "Chicken Biryani",
      url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D",
      recipeDesc:
        "A flavorful Indian rice dish cooked with marinated chicken, spices, and herbs.",
      recipeIngredients:
        "Basmati rice, Chicken, Onions, Yogurt, Ginger garlic paste, Spices",
      chiefName: "Chef Ayesha Khan",
      categories: "Dinner, Indian, Rice",
    },
    {
      id: "xyzb",
      recipeName: "Avocado Toast",
      url: "https://images.unsplash.com/photo-1704545229893-4f1bb5ef16a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXZvY2FkbyUyMFRvYXN0fGVufDB8fDB8fHww",
      recipeDesc:
        "A quick and healthy breakfast made with mashed avocado and toasted bread.",
      recipeIngredients:
        "Bread slices, Ripe avocado, Lemon juice, Salt, Chili flakes",
      chiefName: "Chef Emily Stone",
      categories: "Breakfast, Vegan",
    },
    {
      id: "xyzr",
      recipeName: "Beef Tacos",
      url: "https://plus.unsplash.com/premium_photo-1661730314652-911662c0d86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVlZiUyMFRhY29zfGVufDB8fDB8fHww",
      recipeDesc:
        "Mexican-style tacos with seasoned beef, fresh vegetables, and salsa.",
      recipeIngredients:
        "Taco shells, Ground beef, Onions, Lettuce, Tomatoes, Cheddar cheese, Salsa",
      chiefName: "Chef Carlos Mendez",
      categories: "Dinner, Mexican",
    },
    {
      id: "xyzk",
      recipeName: "Chocolate Brownies",
      url: "https://images.unsplash.com/photo-1672867458764-2a04080005fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENob2NvbGF0ZSUyMEJyb3duaWV8ZW58MHx8MHx8fDA%3D",
      recipeDesc:
        "Rich and fudgy chocolate brownies perfect for dessert lovers.",
      recipeIngredients:
        "All-purpose flour, Cocoa powder, Butter, Sugar, Eggs, Vanilla extract",
      chiefName: "Chef Olivia Baker",
      categories: "Dessert, Baking",
    },
  ]);

  return (
    <RecipiesContext.Provider value={[data, setData]}>
      {prpops.children}
    </RecipiesContext.Provider>
  );
}

export default Recipe;
