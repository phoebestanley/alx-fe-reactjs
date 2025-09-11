// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes, searchTerm } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
    searchTerm: state.searchTerm,
  }));

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.length > 0 ? (
        displayRecipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '12px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
