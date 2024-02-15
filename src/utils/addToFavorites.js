function addToFavorites(recipeId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(recipeId)) {
      favorites.push(recipeId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }