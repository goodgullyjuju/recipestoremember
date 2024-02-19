import React from 'react';
import { Link } from 'react-router-dom';
import sampleRecipes from './sampleRecipes';
import './RecipeList.css'; // Assuming you have a CSS file for styling

function RecipeList() {
    return (
      <div className="recipe-list">
        <h2>Recipes</h2>
        <ul>
          {sampleRecipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.name}</h3>
                {recipe.imageUrl && (
                  <img src={`${process.env.PUBLIC_URL}${recipe.imageUrl}`} alt={recipe.name} className="recipe-image" />
                )}
              </Link>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default RecipeList;
