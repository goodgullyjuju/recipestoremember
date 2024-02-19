import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sampleRecipes from './sampleRecipes'; // Updated import path

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log('ID:', id); // For debugging
    const recipeDetail = sampleRecipes.find(recipe => recipe.id.toString() === id);
    console.log('Recipe Detail:', recipeDetail); // For debugging
    setRecipe(recipeDetail);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
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
