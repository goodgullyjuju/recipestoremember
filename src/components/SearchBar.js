import React, { useState } from 'react';
import SearchBar from './SearchBar';
import sampleRecipes from './sampleRecipes';
import RecipeList from './RecipeList'; // Assuming RecipeList displays the recipes

function ContentView() {
  const [searchResults, setSearchResults] = useState(sampleRecipes);

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults(sampleRecipes); // Reset to show all recipes if search is cleared
      return;
    }
    const filteredResults = sampleRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={searchResults} /> {/* Pass filtered results to RecipeList */}
    </div>
  );
}

export default ContentView;
