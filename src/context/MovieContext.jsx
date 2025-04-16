// src/context/MovieContext.js
import { createContext, useState, useCallback, useContext } from 'react';
import { useMovies } from '../hooks/useMovies';

// Create context
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // UI state
  const [viewType, setViewType] = useState('list'); // 'list' or 'grid'
  const [sortBy, setSortBy] = useState('year');

  // Movie selection state
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Use custom hook for fetching and sorting movies
  const { 
    movies, 
    loading, 
    error,
    totalPages,
    totalResults 
  } = useMovies(searchQuery, currentPage, itemsPerPage, sortBy);

  // Action handlers with useCallback to prevent unnecessary re-renders
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handleViewChange = useCallback((type) => {
    setViewType(type);
  }, []);

  const handleSortChange = useCallback((sort) => {
    setSortBy(sort);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleMovieSelect = useCallback((movie) => {
    setSelectedMovie(movie);
  }, []);

  const handleCloseMovieDetails = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  const handleItemsPerPageChange = useCallback((count) => {
    setItemsPerPage(count);
    setCurrentPage(1); // Reset to first page when changing items per page
  }, []);

  // Create value object to pass through context
  const value = {
    // State
    movies,
    loading,
    error,
    totalPages,
    totalResults,
    searchQuery,
    currentPage,
    itemsPerPage,
    viewType,
    sortBy,
    selectedMovie,
    
    // Actions
    handleSearch,
    handleViewChange,
    handleSortChange,
    handlePageChange,
    handleMovieSelect,
    handleCloseMovieDetails,
    handleItemsPerPageChange
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook for using the movie context
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export default MovieContext;