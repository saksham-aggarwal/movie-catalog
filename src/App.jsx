import { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import Pagination from './components/Pagination';
import { mockMovies } from './data/mockMovies';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const itemsPerPage = 5;

  // Search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    // Filter movies based on search query
    const filteredMovies = mockMovies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filteredMovies);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Get current page items
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchResults.slice(startIndex, endIndex);
  };

  // Calculate total pages
  const totalPages = Math.max(1, Math.ceil(searchResults.length / itemsPerPage));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Movie Catalog</h1>
          <p className="text-gray-600">Search for your favorite movies</p>
        </header>
        
        {/* Search input */}
        <SearchBar 
          searchQuery={searchQuery} 
          onSearch={handleSearch} 
          resultsCount={searchResults.length} 
        />
        
        {/* Results */}
        <div className="space-y-4">
          {getCurrentItems().map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={setSelectedMovie}
            />
          ))}
          
          {searchQuery && searchResults.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No movies found matching "{searchQuery}"</p>
              <p className="text-sm mt-2">Try searching for a different title</p>
            </div>
          )}
          
          {!searchQuery && (
            <div className="text-center py-16">
              <p className="text-gray-600">Enter a movie title to search</p>
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {searchResults.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
        
        {/* Movie Details Modal */}
        {selectedMovie && (
          <MovieDetails 
            movie={selectedMovie} 
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    </div>
  );
};

export default App;