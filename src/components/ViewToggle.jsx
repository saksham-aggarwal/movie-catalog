import React from 'react';
import { Grid, List } from 'lucide-react';

const ViewToggle = ({ viewType, onViewChange }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded-lg transition-colors bg-white border ${
          viewType === 'list'
            ? 'border-gray-300 shadow-sm text-gray-600'
            : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'
        }`}
        aria-label="List view"
      >
        <List size={20} />
      </button>
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded-lg transition-colors bg-white border ${
          viewType === 'grid'
            ? 'border-gray-300 shadow-sm text-gray-600'
            : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'
        }`}
        aria-label="Grid view"
      >
        <Grid size={20} />
      </button>
    </div>
  );
};

export default ViewToggle;