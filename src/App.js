import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContentView from './ContentView';
import Favorites from './Favorites';
import ShoppingList from './ShoppingList';
import RecipeDetail from './RecipeDetail';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/shopping-list">Shopping List</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ContentView />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          {/* Consider adding additional routes here if you have more components to route to */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
