import React from 'react';
import { SortDesc } from 'lucide-react';

const SortFilter = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-2">
      <SortDesc className="text-gray-400" size={20} />
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-gray-100 focus:border-gray-300 outline-none transition-all text-gray-600 bg-white"
      >
        <option value="year">Sort by Year</option>
        <option value="rating">Sort by Rating</option>
      </select>
    </div>
  );
};

export default SortFilter;