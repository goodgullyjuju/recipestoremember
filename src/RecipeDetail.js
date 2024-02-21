import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sampleRecipes from './sampleRecipes';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeDetail = sampleRecipes.find(recipe => recipe.id.toString() === id);
    setRecipe(recipeDetail);
  }, [id]);

  const createPrintableContent = (recipe) => {
    if (!recipe) return '';

    let ingredientsList = '';
    if (recipe.ingredients) {
      ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    }

    let stepsList = '';
    if (recipe.steps) {
      stepsList = recipe.steps.map(step => `<li>${step}</li>`).join('');
    }

    return `
      <html>
      <head>
        <title>Print Recipe</title>
      </head>
      <body>
        <h1>${recipe.name}</h1>
        <img src="${recipe.imageUrl}" alt="${recipe.name}" style="max-width:100%;"/>
        <p>${recipe.description}</p>
        <h2>Ingredients:</h2>
        <ul>${ingredientsList}</ul>
        <h2>Steps:</h2>
        <ol>${stepsList}</ol>
      </body>
      </html>
    `;
  };

  const handlePrint = () => {
    if (recipe) {
      const printableContent = createPrintableContent(recipe);
      const printWindow = window.open('', '_blank');
      printWindow.document.write(printableContent);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

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
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default RecipeDetail;
