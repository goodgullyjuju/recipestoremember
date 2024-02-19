import React, { useState, useEffect } from 'react';
import sampleRecipes from './sampleRecipes'; // Adjust the path as necessary

function ShoppingList() {
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    // Assuming we want to aggregate ingredients from all recipes in sampleRecipes
    const aggregatedIngredients = sampleRecipes
      .map((recipe) => recipe.ingredients)
      .flat()
      .reduce((acc, ingredient) => {
        // Assuming your ingredient object structure includes 'name', 'quantity', and 'unit'
        const key = `${ingredient.name}-${ingredient.unit}`;
        if (!acc[key]) {
          acc[key] = { ...ingredient, quantity: 0 };
        }
        acc[key].quantity += ingredient.quantity;
        return acc;
      }, {});

    setIngredientsList(Object.values(aggregatedIngredients));
  }, []); // Empty dependency array means this effect runs once on mount

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

