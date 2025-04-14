import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, onSearch, resultsCount }) => {
  return (
    <div className="mb-8 relative">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search movies by title..."
          className="w-full px-4 py-3 pl-12 rounded-lg border focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
        />
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
      </div>
      
      {searchQuery && (
        <p className="mt-2 text-sm text-gray-600">
          Found {resultsCount} results for "{searchQuery}"
        </p>
      )}
    </div>
  );
};

export default SearchBar;