// src/components/MovieDetails.js
import { useState, useEffect } from 'react';
import { X, Calendar, Star, Clock, Film, Tag, User } from 'lucide-react';

const MovieDetails = ({ movie, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Add animation effect when opening/closing the modal
  useEffect(() => {
    setIsVisible(true);

    // Add event listener for escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Clean up event listener
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match this timing with CSS transition
  };

  // Mock image URL
  const posterUrl = movie.poster;

  // Format runtime (normally would come from API)
  const formatRuntime = (minutes) => {
    if (!minutes) return 'Unknown';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  // Mock data (would normally come from the API)
  const mockRuntime = 120;
  const mockGenres = ['Action', 'Adventure', 'Sci-Fi'];
  const mockDirector = 'Director\'s Name';

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-gray-700/30 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={handleClose}
      role="dialog"
      aria-labelledby="movie-title"
      aria-modal="true"
    >
      <div
        className={`bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-8'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
            aria-label="Close details"
          >
            <X className="h-6 w-6" />
          </button>

          <h2 id="movie-title" className="text-2xl font-bold text-gray-900 pr-10 mb-4">
            {movie.title}
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex-shrink-0">
              {posterUrl ? (
                <img
                  src={posterUrl}
                  alt={`${movie.title} poster`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ) : (
                <div className="w-full aspect-[2/3] bg-gray-200 rounded-lg flex items-center justify-center">
                  <Film className="h-16 w-16 text-gray-400" />
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {mockGenres.map(genre => (
                  <span
                    key={genre}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="flex flex-wrap gap-4 mb-4">
                {movie.releaseDate && (
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
                  </div>
                )}

                {movie.rating > 0 && (
                  <div className="flex items-center text-gray-700">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    <span>{movie.rating.toFixed(1)} / 10</span>
                  </div>
                )}

                <div className="flex items-center text-gray-700">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{formatRuntime(mockRuntime)}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-gray-700 mb-6">
                {movie.plot || 'No overview available for this movie.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Director
                  </h4>
                  <p className="text-gray-700">{mockDirector}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    Original Language
                  </h4>
                  <p className="text-gray-700 capitalize">{movie.originalLanguage || 'Unknown'}</p>
                </div>
              </div>
              <div className="mt-8 pt-32 border-t border-gray-200 flex justify-end">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-white text-gray-800 border-2 border-gray-800 rounded-lg hover:bg-gray-200 hover:text-white transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;