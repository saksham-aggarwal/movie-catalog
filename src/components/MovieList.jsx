import { useMovieContext } from '../context/MovieContext';
import MovieCard from './MovieCard';

const MovieList = ({ movies, viewType }) => {
  const { handleMovieSelect } = useMovieContext();

  return (
    <div 
      className={`${viewType === 'grid'
        ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'
        : 'space-y-4'
      }`}
      role="list"
      aria-label="Movies list"
    >
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={handleMovieSelect}
          viewType={viewType}
        />
      ))}
    </div>
  );
};

export default MovieList;