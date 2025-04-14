import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import Pagination from './components/Pagination';
import { searchMovies, getPopularMovies } from './services/movieApi';
import ViewToggle from './components/ViewToggle';
import SortFilter from './components/SortFilter';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [itemsPerPage] = useState(5);

  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [viewType, setViewType] = useState('list'); // 'list' or 'grid'
  const [sortBy, setSortBy] = useState('year');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = searchQuery
          ? await searchMovies(searchQuery, currentPage, itemsPerPage)
          : await getPopularMovies(currentPage, itemsPerPage);

        // Sort movies based on selected criteria
        const sortedMovies = data.results.sort((a, b) => {
          if (sortBy === 'year') {
            return b.year - a.year;
          }
          return b.rating - a.rating;
        });

        setMovies(sortedMovies);
        setTotalPages(data.totalPages);
        setTotalResults(data.totalResults);

      } catch (err) {
        setError('Failed to fetch movies');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery, currentPage, itemsPerPage, sortBy]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Movie Vault</h1>
          <p className="text-gray-600">Search for your favorite movies</p>
        </header>

        <SearchBar
          searchQuery={searchQuery}
          onSearch={handleSearch}
          resultsCount={totalResults}
        />

        <div className="flex justify-between items-center mb-6">
          <ViewToggle viewType={viewType} onViewChange={setViewType} />
          <SortFilter sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className={`${viewType === 'grid'
            ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6'
            : 'space-y-4'
            }`}>
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={setSelectedMovie}
                viewType={viewType}
              />
            ))}

            {searchQuery && movies.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">No movies found matching "{searchQuery}"</p>
                <p className="text-sm mt-2">Try searching for a different title</p>
              </div>
            )}
          </div>
        )}

        {totalPages > 1 && !loading && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

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