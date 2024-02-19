import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sampleRecipes from './sampleRecipes'; // Ensure the import path is correct

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log('ID:', id); // Debugging: Log the ID to ensure it's correct
    const recipeDetail = sampleRecipes.find(recipe => recipe.id.toString() === id);
    console.log('Recipe Detail:', recipeDetail); // Debugging: Log the found recipe detail
    
    if (recipeDetail) {
      setRecipe(recipeDetail);
    } else {
      console.error('Recipe not found for ID:', id);
      // Optional: Set some state to show a not-found message to the user
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading or recipe not found...</div>;
  }

  return (
    <div>
      {/* Rendering logic remains unchanged */}
    </div>
  );
}

export default RecipeDetail;
