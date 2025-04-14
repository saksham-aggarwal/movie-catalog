import React from 'react';
import { Film } from 'lucide-react';

const MovieCard = ({ movie, onClick, viewType = 'list' }) => {
  const fallbackImage = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.style.display = 'none'; // Hide the img element
    e.target.nextElementSibling.style.display = 'flex'; // Show the fallback div
  };

  return (
    <div 
      onClick={() => onClick(movie)}
      className={`
        cursor-pointer bg-white rounded-lg shadow hover:shadow-md transition-shadow
        ${viewType === 'list' 
          ? 'flex gap-4 p-4'
          : 'flex flex-col h-full'
        }
      `}
    >
      <div className="relative">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          onError={fallbackImage}
          className={`
            object-cover
            ${viewType === 'list'
              ? 'w-24 h-36 rounded-lg'
              : 'w-full h-[300px] rounded-t-lg'
            }
          `}
        />
        {/* Fallback div that shows when image fails to load */}
        <div 
          className={`
            hidden items-center justify-center bg-gray-200
            ${viewType === 'list'
              ? 'w-24 h-36 rounded-lg'
              : 'w-full h-[442px] rounded-t-lg'
            }
          `}
        >
          <Film className="text-gray-400" size={48} />
        </div>
      </div>

      <div className={`
        flex flex-col
        ${viewType === 'list'
          ? 'flex-1'
          : 'p-3 flex-1'
        }
      `}>
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{movie.title}</h2>
        <p className="text-sm text-gray-600">{movie.year}</p>
        {viewType === 'list' && (
          <p className="mt-2 text-gray-600 line-clamp-2">{movie.plot}</p>
        )}
        <div className="mt-auto pt-2">
          <span className="px-2 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
            ★ {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;