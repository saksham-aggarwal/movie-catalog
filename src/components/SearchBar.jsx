// src/components/SearchBar.js
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchQuery, onSearch, resultsCount }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const inputRef = useRef(null);

  // Sync local state with prop when searchQuery changes externally
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localQuery);
  };

  const handleClear = () => {
    setLocalQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search for movies..."
            className="w-full py-3 pl-12 pr-1 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            aria-label="Search for movies"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          
          {localQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        
        <button
          type="submit"
          className="md:absolute right-2 top-1/2 md:transform md:-translate-y-1/2 bg-gray-200 hover:bg-gray-300 hover:text-white text-white px-4 py-2 rounded-md transition-colors mt-2 md:mt-0 w-full md:w-auto"
        >
          Search
        </button>
      </form>
      
      {resultsCount > 0 && searchQuery && (
        <p className="text-sm text-gray-600 mt-2">
          Found {resultsCount} results for "{searchQuery}"
        </p>
      )}
    </div>
  );
};

export default SearchBar;