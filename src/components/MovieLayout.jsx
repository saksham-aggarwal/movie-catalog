import { useMovieContext } from '../context/MovieContext';
import Header from './Header';
import ControlPanel from './ControlPanel';
import MovieList from './MovieList';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import EmptyState from './EmptyState';
import Pagination from './Pagination';
import MovieDetails from './MovieDetails';

const MovieLayout = () => {
  const {
    movies,
    loading,
    error,
    totalPages,
    searchQuery,
    currentPage,
    viewType,
    selectedMovie,
    handlePageChange,
    handleCloseMovieDetails
  } = useMovieContext();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        
        <ControlPanel />
        
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState message={error} />
        ) : (
          <>
            {movies.length > 0 ? (
              <MovieList movies={movies} viewType={viewType} />
            ) : (
              <EmptyState searchQuery={searchQuery} />
            )}
          </>
        )}

        {totalPages > 1 && !loading && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {selectedMovie && (
          <MovieDetails
            movie={selectedMovie}
            onClose={handleCloseMovieDetails}
          />
        )}
      </div>
    </div>
  );
};

export default MovieLayout;