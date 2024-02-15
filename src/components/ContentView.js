import React from 'react';
import { Link } from 'react-router-dom';
import './ContentView.css'; // Make sure to create this CSS file

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
          <article className="recipe">
            <img src="/path/to/moms-pizza.jpg" alt="Mom's Pizza" className="recipe-image"/>
            <h3>Mom's Pizza</h3>
            <p>A homemade pizza with a secret family recipe.</p>
            <Link to="/recipe/1">Read more</Link>
          </article>
          <article className="recipe">
            <img src="/path/to/moms-chocolate-chip-cookies.jpg" alt="Mom's Chocolate Chip Cookies" className="recipe-image"/>
            <h3>Mom's Chocolate Chip Cookies</h3>
            <p>Delicious chocolate cookies with pecans.</p>
            <Link to="/recipe/2">Read more</Link>
          </article>
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