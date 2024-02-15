import React from 'react';
import { Link } from 'react-router-dom';

function ContentView() {
  return (
    <div>
      <header>
        <h1>Welcome to Recipe Store Member</h1>
        <p>Discover your next favorite meal today!</p>
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/shopping-list">Shopping List</Link></li>
        </ul>
      </nav>
      <section>
        <h2>Featured Recipes</h2>
        {/* This could be a component that fetches and displays featured recipes */}
        <div>
          {/* Placeholder for featured recipes; ideally, you'd map over a list of recipes here */}
          <article>
            <h3>Mom's Pizza</h3>
            <p>A homemade pizza with a secret family recipe.</p>
            <Link to="/recipe/1">Read more</Link>
          </article>
          <article>
            <h3>Mom's Chocolate Chip Cookies</h3>
            <p>Delicious chocolate cookies with pecans.</p>
            <Link to="/recipe/2">Read more</Link>
          </article>
        </div>
      </section>
      <aside>
        <h3>Search for Recipes</h3>
        {/* Including the SearchBar component if you have one */}
        {/* <SearchBar onSearch={handleSearch} /> */}
        {/* For demonstration, the search functionality isn't implemented */}
      </aside>
      <footer>
        <p>&copy; {new Date().getFullYear()} Recipe Store Member. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContentView;
