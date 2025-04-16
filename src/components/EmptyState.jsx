import { Search } from 'lucide-react';

const EmptyState = ({ searchQuery }) => {
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100 p-6" aria-live="polite">
      {searchQuery ? (
        <>
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">No movies found matching "{searchQuery}"</p>
          <p className="text-sm mt-2 text-gray-500">Try searching for a different title</p>
        </>
      ) : (
        <>
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">No movies available</p>
          <p className="text-sm mt-2 text-gray-500">Try searching for a movie title</p>
        </>
      )}
    </div>
  );
};

export default EmptyState;