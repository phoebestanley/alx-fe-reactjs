import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced search with multiple parameters
export const searchUsers = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username}+`;
    if (location) query += `location:${location}+`;
    if (minRepos) query += `repos:>=${minRepos}+`;

    query = query.trim().replace(/\+$/, ""); // remove trailing +

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
