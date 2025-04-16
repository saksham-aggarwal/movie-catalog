// src/components/MovieCard.js
import { Calendar, Star, Film, Info } from 'lucide-react';

const MovieCard = ({ movie, onClick, viewType }) => {
  // const {
  //   id,
  //   title,
  //   poster,
  //   release_date,
  //   vote_average,
  //   overview
  // } = movie;

  // Mock image URL (in real app, use the actual URL from an API)
  const posterUrl = movie.poster 
    ?  movie.poster
    : `/api/placeholder/300/450`;

  if (viewType === 'grid') {
    return (
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg cursor-pointer"
        onClick={() => onClick(movie)}
        role="listitem"
      >
        <div className="aspect-[2/3] bg-gray-200 relative">
          {posterUrl ? (
            <div 
              className="h-full w-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${posterUrl})` }}
            ></div>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              <Film className="h-10 w-10 text-gray-400" />
            </div>
          )}
        </div>
        <div className="p-3">
          <h3 className="font-medium text-gray-900 mb-1 truncate">{movie.title}</h3>
          <div className="flex items-center text-sm text-gray-600">
            {movie.releaseDate && (
              <span className="flex items-center mr-3">
                <Calendar className="h-3 w-3 mr-1" />
                {movie.releaseDate}
              </span>
            )}
            {movie.rating > 0 && (
              <span className="flex items-center">
                <Star className="h-3 w-3 mr-1 text-yellow-500" />
                {movie.rating.toFixed(1)}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // List view
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all"
      onClick={() => onClick(movie)}
      role="listitem"
    >
      <div className="flex">
        <div className="w-32 h-48 bg-gray-200 flex-shrink-0">
          {posterUrl ? (
            <div 
              className="h-full w-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${posterUrl})` }}
            ></div>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              <Film className="h-8 w-8 text-gray-400" />
            </div>
          )}
        </div>
        <div className="p-4 flex-1">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-gray-900">{movie.title}</h3>
            <div className="flex items-center text-sm text-gray-600 ml-2 flex-shrink-0">
              {movie.rating > 0 && (
                <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                  <Star className="h-3 w-3 mr-1 text-yellow-500" />
                  {movie.rating.toFixed(1)}
                </div>
              )}
            </div>
          </div>
          
          {movie.releaseDate && (
            <p className="text-sm text-gray-600 mt-1 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {movie.releaseDate}
            </p>
          )}
          
          <p className="text-sm text-gray-700 mt-2 line-clamp-2">{movie.plot}</p>
          
          <button
            className="mt-3 text-sm text-blue-600 hover:text-blue-800 flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              onClick(movie);
            }}
          >
            <Info className="h-4 w-4 mr-1" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;