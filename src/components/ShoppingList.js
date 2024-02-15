function ShoppingList({ ingredients }) {
    // ingredients could be an array of ingredient objects
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <input type="checkbox" /> {ingredient.name}
          </li>
        ))}
      </ul>
    );
  }
  export default ShoppingList;