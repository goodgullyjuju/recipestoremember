import React from 'react';

// Sample data for demonstration
const sampleRecipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A delicious Italian pasta dish made with eggs, cheese, bacon, and black pepper.",
    imageUrl: "url-to-image"
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    description: "A popular curry dish of roasted chicken chunks in a spicy sauce.",
    imageUrl: "url-to-image"
  },
  // Add more recipes as needed
];

function RecipeList() {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {sampleRecipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            {/* Optional: Display the recipe image if imageUrl is provided */}
            {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} style={{ width: '100px', height: '100px' }} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
