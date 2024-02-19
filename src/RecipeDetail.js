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
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      {recipe.ingredients && (
        <div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
      {recipe.steps && (
        <div>
          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
      {recipe.imageUrl && (
        <img src={recipe.imageUrl} alt={recipe.name} style={{ maxWidth: '100%', height: 'auto' }} />
      )}
      {recipe.videoUrl && (
        <div>
          <h3>Tutorial Video</h3>
          <iframe
            width="560"
            height="315"
            src={recipe.videoUrl}
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;