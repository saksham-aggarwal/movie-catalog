import { useState, useEffect, useMemo } from 'react';
import { searchMovies, getPopularMovies } from '../services/movieApi';

export const useMovies = (searchQuery, currentPage, itemsPerPage, sortBy) => {
  const [state, setState] = useState({
    allMovies: [],
    loading: true,
    error: null,
    apiPage: 1,
    totalApiResults: 0
  });

  // Calculate which API page we need based on client page
  const calculateApiPage = (clientPage) => {
    // 20 results per API page, itemsPerPage per client page
    return Math.ceil((clientPage * itemsPerPage) / 20);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        const newApiPage = calculateApiPage(currentPage);
        
        // Fetch new data if:
        // 1. API page changes
        // 2. Search query changes
        // 3. No movies loaded yet
        if (newApiPage !== state.apiPage || searchQuery || state.allMovies.length === 0) {
          const data = searchQuery
            ? await searchMovies(searchQuery, newApiPage)
            : await getPopularMovies(newApiPage);

          setState(prev => ({
            ...prev,
            allMovies: data.results,
            apiPage: newApiPage,
            totalApiResults: data.totalResults
          }));
        }
      } catch (err) {
        setState(prev => ({
          ...prev,
          error: `Failed to fetch movies: ${err.message || 'Unknown error'}`
        }));
      } finally {
        setState(prev => ({ ...prev, loading: false }));
      }
    };

    fetchMovies();
  }, [searchQuery, currentPage, itemsPerPage, state.apiPage]);

  const sortMovies = (movies, sortBy) => {
    return [...movies].sort((a, b) => {
      if (sortBy === 'year') {
        return b.year - a.year;
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
    });
  };

  // Calculate paginated movies for current page
  const paginatedMovies = useMemo(() => {
    const sortedMovies = sortMovies(state.allMovies, sortBy);
    const startIndex = ((currentPage - 1) * itemsPerPage) % 20;
    const endIndex = Math.min(startIndex + itemsPerPage, sortedMovies.length);
    
    return sortedMovies.slice(startIndex, endIndex);
  }, [state.allMovies, currentPage, itemsPerPage, sortBy]);

  return {
    movies: paginatedMovies,
    loading: state.loading,
    error: state.error,
    totalPages: Math.ceil(state.totalApiResults / itemsPerPage),
    totalResults: state.totalApiResults
  };
};