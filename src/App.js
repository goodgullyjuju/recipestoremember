import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ContentView from './components/ContentView'; // Imported ContentView
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Favorites from './components/Favorites';
import ShoppingList from './components/ShoppingList';

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
      
        {/* Switch between routes */}
        <Switch>
          <Route path="/" exact component={ContentView} /> {/* Updated to use ContentView */}
          <Route path="/recipe/:id" component={RecipeDetail} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/shopping-list" component={ShoppingList} />
          {/* Additional routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
