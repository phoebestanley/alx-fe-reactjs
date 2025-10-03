import { useEffect, useState } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load mock data
  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {recipe.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
