import axios from 'axios';

const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const fetchShowDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/shows/${id}`);
  return response.data;
};

export const fetchSeasonDetails = async (showId, seasonId) => {
  const response = await axios.get(`${API_BASE_URL}/shows/${showId}/seasons/${seasonId}`);
  return response.data;
};

export const fetchGenres = async () => {
  const response = await axios.get(`${API_BASE_URL}/genres`);
  return response.data;
};

export const fetchShowsByGenre = async (genreId) => {
  const response = await axios.get(`${API_BASE_URL}/genres/${genreId}`);
  return response.data;
};