import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Note the change here from 'Switch' to 'Routes'
import ContentView from './components/ContentView';
// Remove this line if RecipeList is not used in App.js
// import RecipeList from './components/RecipeList';
import Favorites from './components/Favorites';
import ShoppingList from './components/ShoppingList';
import RecipeDetail from './components/RecipeDetail';
function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/shopping-list">Shopping List</Link></li>
          </ul>
        </nav>
      
        {/* Update to Routes from Switch for react-router-dom v6 */}
        <Routes>
          <Route path="/" element={<ContentView />} exact />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          {/* Additional routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
