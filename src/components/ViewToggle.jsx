// src/components/ViewToggle.js
import { Grid, List } from 'lucide-react';

const ViewToggle = ({ viewType, onViewChange }) => {
  return (
    <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md p-1" role="radiogroup" aria-label="View type">
      <button
        className={`flex items-center space-x-1 px-3 py-1 rounded ${
          viewType === 'list' 
            ? 'bg-blue-100 text-blue-700 font-medium' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => onViewChange('list')}
        aria-label="List view"
        aria-pressed={viewType === 'list'}
      >
        <List className="h-4 w-4" />
        <span>List</span>
      </button>
      
      <button
        className={`flex items-center space-x-1 px-3 py-1 rounded ${
          viewType === 'grid' 
            ? 'bg-blue-100 text-blue-700 font-medium' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => onViewChange('grid')}
        aria-label="Grid view"
        aria-pressed={viewType === 'grid'}
      >
        <Grid className="h-4 w-4" />
        <span>Grid</span>
      </button>
    </div>
  );
};

export default ViewToggle;