import { mockMovies } from '../data/mockMovies';

// Environment variables with fallback values for missing configurations
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
const AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;
const IMG_URL = import.meta.env.VITE_TMDB_IMG_URL

// Add headers configuration
const headers = {
  'Authorization': `Bearer ${AUTH_TOKEN}`,
  'Content-Type': 'application/json'
};

// Validate if API key is available
const isApiKeyAvailable = () => {
  if (!AUTH_TOKEN) {
    console.warn('API key not found. Using mock data instead.');
    return false;
  }
  return true;
};

export const searchMovies = async (query, page = 1) => {
  // Use mock data if API key is not available
  if (!isApiKeyAvailable()) {
    return getMockMovieResults(query);
  }

  try {
    const url = `${BASE_URL}/search/movie?query=${query}&page=${page}`;
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    const results = data.results
      // Filter by title match for more accurate results
      .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
      .map(formatMovieData);

    return {
      results,
      totalResults: results.length,
      totalPages: data.total_pages
    };
  } catch (error) {
    console.error('Error searching movies:', error);
    // Fallback to mock data on error
    return getMockMovieResults(query);
  }
};

export const getPopularMovies = async (page = 1) => {
  // Use mock data if API key is not available
  if (!isApiKeyAvailable()) {
    return getMockMovieResults('');
  }

  try {
    const url = `${BASE_URL}/movie/popular?page=${page}`;
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    const results = data.results.map(formatMovieData);

    return {
      results,
      totalResults: data.total_results,
      totalPages: data.total_pages
    };
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    // Fallback to mock data on error
    return getMockMovieResults('');
  }
};

const formatMovieData = (movie) => ({
  id: movie.id,
  title: movie.title,
  year: movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown',
  director: movie.director || "N/A", // Would require additional API call
  plot: movie.overview || movie.plot || "No plot available",
  genre: Array.isArray(movie.genre_ids)
    ? movie.genre_ids.join(", ")
    : movie.genre || "N/A", // Would need to map to genre names
  rating: movie.vote_average || movie.rating || 0,
  poster: movie.poster_path
    ? `${IMG_URL}${movie.poster_path}`
    : movie.poster || null,
  releaseDate: movie.release_date || "N/A",
  originalLanguage: movie.original_language || "N/A",
});

// Helper function to get results from mock data
const getMockMovieResults = (query) => {
  const filteredMovies = query
    ? mockMovies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()))
    : mockMovies;

  return {
    results: filteredMovies,
    totalResults: filteredMovies.length
  };
};