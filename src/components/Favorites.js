import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sampleRecipes from '../sampleRecipes'; // Ensure this path is correct

function Favorites() {
  // Assuming you're storing favorite recipe IDs in local storage or state
  const [favoriteRecipeIds, setFavoriteRecipeIds] = useState([]);

  useEffect(() => {
    // Load favorite recipe IDs from local storage or a global state
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteRecipeIds(storedFavorites);
  }, []);

  const favoriteRecipes = sampleRecipes.filter(recipe => favoriteRecipeIds.includes(recipe.id));

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      {favoriteRecipes.length > 0 ? (
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                {recipe.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}

export default Favorites;
