// src/components/SortFilter.js
import { SortAsc, SortDesc } from 'lucide-react';

const SortFilter = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'year', label: 'Release Year' },
    { value: 'title', label: 'Title' },
    { value: 'rating', label: 'Rating' },
  ];

  return (
    <div className="flex items-center">
      <label htmlFor="sort-by" className="mr-2 text-sm text-gray-700 whitespace-nowrap">
        <SortDesc className="h-4 w-4 inline-block mr-1" />
        Sort by:
      </label>
      <select
        id="sort-by"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 rounded-md p-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilter;