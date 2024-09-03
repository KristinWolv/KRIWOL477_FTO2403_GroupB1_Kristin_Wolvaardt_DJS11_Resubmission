import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const API_BASE_URL = 'https://podcast-api.netlify.app';

const usePodcastStore = create(persist(
  (set, get) => ({
    shows: [],
    showDetails: {},
    seasonDetails: {},
    genres: [],
    favourites: [],
    currentAudio: null,
    isLoading: false,

    fetchShows: async () => {
      set({ isLoading: true });
      try {
        const response = await axios.get(`${API_BASE_URL}`);
        set({ shows: response.data, isLoading: false });
      } catch (error) {
        console.error("Error fetching shows:", error);
        set({ isLoading: false });
      }
    },

    fetchShowDetails: async (id) => {
      set({ isLoading: true });
      try {
        const response = await axios.get(`${API_BASE_URL}/shows/${id}`);
        set({ showDetails: response.data, isLoading: false });
      } catch (error) {
        console.error("Error fetching show details:", error);
        set({ isLoading: false });
      }
    },

    fetchSeasonDetails: async (showId, seasonId) => {
      set({ isLoading: true });
      try {
        const response = await axios.get(`${API_BASE_URL}/shows/${showId}/seasons/${seasonId}`);
        set({ seasonDetails: response.data, isLoading: false });
      } catch (error) {
        console.error("Error fetching season details:", error);
        set({ isLoading: false });
      }
    },

    fetchGenres: async () => {
      set({ isLoading: true });
      try {
        const response = await axios.get(`${API_BASE_URL}/genres`);
        set({ genres: response.data, isLoading: false });
      } catch (error) {
        console.error("Error fetching genres:", error);
        set({ isLoading: false });
      }
    },

    fetchShowsByGenre: async (genreId) => {
      set({ isLoading: true });
      try {
        const response = await axios.get(`${API_BASE_URL}/genres/${genreId}`);
        set({ shows: response.data, isLoading: false });
      } catch (error) {
        console.error("Error fetching shows by genre:", error);
        set({ isLoading: false });
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
  }),
  {
    name: "podcast-storage",
  }
));

export default usePodcastStore;