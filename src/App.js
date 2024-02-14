import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Favorites from './components/Favorites'; // Ensure this component is created
import ShoppingList from './components/ShoppingList'; // Ensure this component is created

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
          <Route path="/" exact component={RecipeList} />
          <Route path="/recipe/:id" component={RecipeDetail} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/shopping-list" component={ShoppingList} />
          {/* You can define other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

