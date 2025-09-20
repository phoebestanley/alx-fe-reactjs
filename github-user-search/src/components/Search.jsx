import { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      let users = [];

      if (username && !location && !minRepos) {
        // ✅ Single user fetch
        const user = await fetchUserData(username);
        users = user ? [user] : [];
      } else {
        // ✅ Advanced search
        users = await searchUsers({ username, location, minRepos });
      }

      if (users.length === 0) {
        setError("Looks like we can’t find any users matching your search.");
      } else {
        setResults(users);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full px-4">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 w-full max-w-4xl bg-white shadow-md rounded-lg p-6"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub username"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repos"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition w-full md:w-auto"
        >
          Search
        </button>
      </form>

      {/* Results Section */}
      <div className="mt-8 w-full max-w-4xl">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {results.length > 0 && (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((user) => (
              <li
                key={user.id}
                className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-20 h-20 rounded-full mb-3"
                />
                <h3 className="font-semibold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline mt-2"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
