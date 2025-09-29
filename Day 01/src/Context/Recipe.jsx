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
