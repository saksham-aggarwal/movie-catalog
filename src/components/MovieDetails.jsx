import React from 'react';

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-600">{movie.title}</h2>
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
                className="w-48 h-72 rounded object-cover text-gray-600"
              />
            </div>
            
            <div className="flex-grow">
              <div className="mb-4">
                <p className="text-gray-600">{movie.year} • {movie.genre}</p>
                <p className="text-amber-600 font-medium mt-1">Rating: {movie.rating}/10</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-1 text-gray-600">Director</h3>
                <p className="text-gray-600">{movie.director}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-1 text-gray-600">Plot</h3>
                <p className="text-gray-700">{movie.plot}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-right">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-white text-gray-800 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200"
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