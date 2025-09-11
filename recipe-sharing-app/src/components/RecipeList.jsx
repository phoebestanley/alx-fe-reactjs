import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 12, margin: 8 }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`/recipes/${recipe.id}`}>View</Link>
              <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
