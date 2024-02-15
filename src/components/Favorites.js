import React, { useState, useEffect } from 'react';

// Assuming sampleRecipes is globally available or imported
const sampleRecipes = [
  { id: 1, name: "Spaghetti Carbonara", description: "A classic Italian pasta dish..." },
  { id: 2, name: "Chicken Tikka Masala", description: "A popular Indian curry dish..." },
  // More recipes
];

function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const favorites = sampleRecipes.filter(recipe => favoriteIds.includes(recipe.id));
    setFavoriteRecipes(favorites);
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favoriteRecipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            {/* Implement additional functionality as needed, e.g., remove from favorites */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
