function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      const recipeDetail = sampleRecipes.find(recipe => recipe.id.toString() === id);
      setRecipe(recipeDetail);
    }, [id]);
  
    if (!recipe) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        {recipe.ingredients && (
          <>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </>
        )}
        {recipe.steps && (
          <>
            <h3>Steps</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </>
        )}
        {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} style={{ maxWidth: '100%', height: 'auto' }} />}
        {recipe.videoUrl && (
          <div>
            <h3>Tutorial Video</h3>
            <iframe
              width="560"
              height="315"
              src={recipe.videoUrl.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
    );
  }
  Export default RecipeDetail;