import React from 'react';

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img 
                src={movie.poster} 
                alt={`${movie.title} poster`} 
                className="w-48 h-72 rounded object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <div className="mb-4">
                <p className="text-gray-600">{movie.year} • {movie.genre}</p>
                <p className="text-amber-600 font-medium mt-1">Rating: {movie.rating}/10</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-1">Director</h3>
                <p>{movie.director}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-1">Plot</h3>
                <p className="text-gray-700">{movie.plot}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-right">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;