import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {user && (
        <div className="p-4 border rounded shadow bg-white">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold text-center mt-2">{user.name || user.login}</h2>
          <p className="text-center text-gray-600">@{user.login}</p>
          <div className="text-center mt-2">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
