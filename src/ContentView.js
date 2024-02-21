import React from 'react';
import { Link } from 'react-router-dom';
import sampleRecipes from './sampleRecipes'; // Ensure this path is correct if necessary
import './ContentView.css';

function ContentView() {
  // Function to toggle favorite status
  const toggleFavorite = (id) => {
    let currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (currentFavorites.includes(id)) {
      currentFavorites = currentFavorites.filter(favId => favId !== id);
    } else {
      currentFavorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(currentFavorites));
    // Trigger re-render. Consider using a more efficient method in a real app
    window.location.reload();
  };

  // Function to handle printing
  const handlePrint = (recipeId) => {
    const printableArea = document.getElementById(`printable-${recipeId}`);
    const originalContents = document.body.innerHTML;
    
    document.body.innerHTML = printableArea.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
  };

  // Check if a recipe is a favorite
  const isFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(id);
  };

  return (
    <div className="content-view">
      <header className="header">
        <h1>Welcome to Recipes to Remember</h1>
        <p>Discover your next favorite meal today!</p>
      </header>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/shopping-list">Shopping List</Link></li>
        </ul>
      </nav>
      <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipes-container">
          {sampleRecipes.map((recipe) => (
            <article className="recipe" key={recipe.id} id={`printable-${recipe.id}`}>
              <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image"/>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <div className="recipe-actions">
                <button onClick={() => toggleFavorite(recipe.id)} className="favorite-button">
                  {isFavorite(recipe.id) ? '♥' : '♡'}
                </button>
                <button onClick={() => handlePrint(recipe.id)} className="print-button">Print</button>
              </div>
              <Link to={`/recipe/${recipe.id}`}>Read more</Link>
            </article>
          ))}
        </div>
      </section>
      <aside className="search-section">
        <h3>Search for Recipes</h3>
      </aside>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Recipes to Remember. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContentView;
