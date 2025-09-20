import axios from "axios";

const BASE_URL = "https://api.github.com";

// 🔹 Advanced user search
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query.trim()}`);
    return response.data.items; // API returns items array
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
