import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sampleRecipes from './sampleRecipes'; // Ensure this path is correct based on your project structure

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log('ID:', id); // Log the ID to see what you're getting from the URL

    // Attempt to find the recipe detail based on the ID, but only if 'id' is defined
    if (id) {
      const recipeDetail = sampleRecipes.find(recipe => recipe.id.toString() === id);
      console.log('Recipe Detail:', recipeDetail); // Log the found recipe detail
      setRecipe(recipeDetail);
    }
  }, [id]);

  if (!recipe) {
    // Fallback UI if no recipe is found or while the recipe is loading
    return <div>Loading...</div>;
  }

  // Render the recipe details
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      {recipe.ingredients && (
        <>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </>
      )}
      {recipe.steps && (
        <>
          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} style={{ maxWidth: '100%', height: 'auto' }} />}
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
