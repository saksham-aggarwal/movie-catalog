import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div 
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
      onClick={() => onClick(movie)}
    >
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <img 
            src={movie.poster} 
            alt={`${movie.title} poster`} 
            className="w-24 h-36 rounded object-cover"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <p className="text-sm text-gray-600">{movie.year} • {movie.genre}</p>
          <p className="text-sm mt-1">Director: {movie.director}</p>
          <p className="text-sm text-amber-600 font-medium mt-1">Rating: {movie.rating}/10</p>
          <p className="text-sm mt-2 line-clamp-2 text-gray-700">{movie.plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;