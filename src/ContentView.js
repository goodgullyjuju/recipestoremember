import React from 'react';
import { Link } from 'react-router-dom';
import sampleRecipes from './sampleRecipes'; // Update if necessary
import './ContentView.css'; // No change needed if CSS file moved with JS file

function ContentView() {
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
        {sampleRecipes.map((recipe, index) => (
  <article className="recipe" key={index}>
    <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image"/>
    <h3>{recipe.name}</h3>
    <p>{recipe.description}</p>
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
