import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Sample recipe data
const sampleRecipeDetails = {
  1: {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with cream, eggs, Parmesan cheese, bits of bacon, and a sprinkle of black pepper.",
    ingredients: ["Pasta", "Eggs", "Parmesan Cheese", "Bacon", "Black Pepper"],
    steps: ["Cook pasta", "Mix eggs and cheese", "Cook bacon", "Combine all and serve"]
    // Add more details as needed
  },
  2: {
    id: 2,
    name: "Chicken Tikka Masala",
    description: "A popular Indian curry dish with roasted chicken chunks in a spicy sauce.",
    ingredients: ["Chicken", "Yogurt", "Tomato Sauce", "Masala Spice", "Rice"],
    steps: ["Marinate chicken", "Roast chicken", "Prepare sauce", "Combine chicken and sauce", "Serve with rice"]
    // Add more details as needed
  }
};

function RecipeDetail() {
  const { id } = useParams(); // Access the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching recipe detail based on ID
    // In a real app, you would fetch this data from a backend server
    const recipeDetail = sampleRecipeDetails[id];
    setRecipe(recipeDetail);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
