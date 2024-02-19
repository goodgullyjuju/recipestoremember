import React, { useState, useEffect } from 'react';

// Dummy selectedRecipes IDs for illustration
// In a real app, this might come from app state or props
const selectedRecipeIds = [1, 2]; // Assuming users have selected recipes with IDs 1 and 2

function ShoppingList({ selectedRecipes }) {
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    // Assuming selectedRecipes is an array of recipe IDs
    const aggregatedIngredients = selectedRecipes
      .map((id) => sampleRecipes.find((recipe) => recipe.id === id)?.ingredients)
      .flat()
      .reduce((acc, ingredient) => {
        const { name, quantity, unit } = ingredient;
        if (!acc[name]) {
          acc[name] = { quantity: 0, unit };
        }
        acc[name].quantity += quantity;
        return acc;
      }, {});

    setIngredientsList(Object.entries(aggregatedIngredients).map(([name, { quantity, unit }]) => ({ name, quantity, unit })));
  }, [selectedRecipes]);

  return (
    <ul>
      {ingredientsList.map((ingredient, index) => (
        <li key={index}>
          <input type="checkbox" /> {ingredient.name} - {ingredient.quantity} {ingredient.unit}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
