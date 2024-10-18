import axios from 'axios';

const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching shows:", error);
    throw error;
  }
};

export const fetchShowDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/id/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching show details for ID ${id}:`, error);
    throw error;
  }
};

export const fetchSeasonDetails = async (showId, seasonId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/id/${showId}/seasons/${seasonId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching season details for show ID ${showId} and season ID ${seasonId}:`, error);
    throw error;
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genres`);
    return response.data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};

export const fetchGenreById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genre/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching genre details for ID ${id}:`, error);
    throw error;
  }
};

export const fetchShowsByGenre = async (genreId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genre/${genreId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching shows by genre ID ${genreId}:`, error);
    throw error;
  }
};
