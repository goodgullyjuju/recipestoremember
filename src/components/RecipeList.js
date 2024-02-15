import React from 'react';
import sampleRecipes from './sampleRecipes';



function RecipeList() {
    return (
      <div>
        <h2>Recipes</h2>
        <ul>
          {sampleRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              {/* Display the recipe image if imageUrl is provided */}
              {recipe.imageUrl && (
                <img src={recipe.imageUrl} alt={recipe.name} style={{ width: '100px', height: '100px' }} />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default RecipeList;