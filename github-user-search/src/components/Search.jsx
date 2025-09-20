import React, { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = ({ onResults }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      if (username && !location && !minRepos) {
        // ✅ Use fetchUserData if only username is provided
        const user = await fetchUserData(username);
        onResults([user]); // wrap in array for consistency
      } else {
        // ✅ Use searchUsers if advanced filters are provided
        const users = await searchUsers({ username, location, minRepos });
        onResults(users);
      }
    } catch (error) {
      console.error("Search failed:", error);
      onResults([]);
    }
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Min Repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default Search;
