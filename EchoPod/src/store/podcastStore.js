// podcastStore.js

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const API_BASE_URL = 'https://podcast-api.netlify.app';

const genreMap = {
  1: 'Personal Growth',
  2: 'Investigative Journalism',
  3: 'History',
  4: 'Comedy',
  5: 'Entertainment',
  6: 'Business',
  7: 'Fiction',
  8: 'News',
  9: 'Kids and Family',
};

const usePodcastStore = create(persist(
  (set, get) => ({
    shows: [],
    showDetails: {},
    seasonDetails: {},
    genres: [],
    favourites: [],
    currentAudio: null,
    isLoading: false,
    error: null, // Added error state
    currentGenre: null,
    currentShow: null,
    
    fetchShows: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get(API_BASE_URL);
        // Sort shows alphabetically by title
       const sortedShows = response.data.sort((a, b) => a.title.localeCompare(b.title));

       set({ shows: sortedShows, isLoading: false }); // Update the state with sorted shows
      } catch (error) {
        console.error("Error fetching shows:", error);
        set({ isLoading: false, error: "Failed to load shows. Please try again." });
      }
    },

    fetchShowDetails: async (id) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get(`${API_BASE_URL}/id/${id}`);
        set({ showDetails: response.data, isLoading: false });
      } catch (error) {
        console.error(`Error fetching show details for ID ${id}:`, error);
        set({ isLoading: false, error: "Failed to load show details." });
      }
    },

    fetchSeasonDetails: async (showId, seasonId) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get(`${API_BASE_URL}/id/${showId}/seasons/${seasonId}`);
        set({ seasonDetails: response.data, isLoading: false });
      } catch (error) {
        console.error(`Error fetching season details for show ID ${showId} and season ID ${seasonId}:`, error);
        set({ isLoading: false, error: "Failed to load season details." });
      }
    },

    fetchGenres: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get(`${API_BASE_URL}/genres`);
        set({ genres: response.data, isLoading: false });
      } catch (error) {
        console.error("Error fetching genres:", error);
        set({ isLoading: false, error: "Failed to load genres." });
      }
    },

    fetchShowsByGenre: async (genreId) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get(`${API_BASE_URL}/genre/${genreId}`);
        set({ shows: response.data, isLoading: false });
      } catch (error) {
        console.error(`Error fetching shows by genre ID ${genreId}:`, error);
        set({ isLoading: false, error: "Failed to load shows by genre." });
      }
    },

    addToFavourites: (episode) => {
      const favourites = get().favourites;
      set({ favourites: [...favourites, episode] });
    },

    removeFromFavourites: (episodeId) => {
      const favourites = get().favourites.filter(e => e.id !== episodeId);
      set({ favourites });
    },

    setCurrentAudio: (audioUrl) => {
      set({ currentAudio: audioUrl });
    },

    getGenreTitleById: (id) => genreMap[id] || 'Unknown Genre',
  }),
  {
    name: "podcast-storage",
  }
));

export default usePodcastStore;




