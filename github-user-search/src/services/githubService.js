import axios from "axios";

const BASE_URL = "https://api.github.com";

// ✅ Basic user fetch by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ✅ Advanced user search (location + repos + username)
export const searchUsers = async ({ username = "", location = "", minRepos = 0 }) => {
  try {
    let query = "";

    if (username) query += `${username}+`;
    if (location) query += `location:${location}+`;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items; // returns an array of users
  } catch (error) {
    throw error;
  }
};
