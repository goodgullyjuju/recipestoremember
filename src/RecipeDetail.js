import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sampleRecipes from './sampleRecipes';


function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log('ID:', id); // Debugging
    // Convert `id` to a number before comparison if `sampleRecipes` uses numeric IDs
    const recipeDetail = sampleRecipes.find(recipe => recipe.id === Number(id));
    console.log('Recipe Detail:', recipeDetail); // Debugging
    setRecipe(recipeDetail);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      {/* Render ingredients, steps, etc. */}
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} />}
      {recipe.videoUrl && (
        <iframe
          width="560"
          height="315"
          src={recipe.videoUrl}
          title={recipe.name}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default RecipeDetail;
