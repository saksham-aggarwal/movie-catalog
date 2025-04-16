import { useMovieContext } from '../context/MovieContext';
import SearchBar from './SearchBar';
import ViewToggle from './ViewToggle';
import SortFilter from './SortFilter';
import ItemsPerPageSelector from './ItemsPerPageSelector';

const ControlPanel = () => {
  const {
    searchQuery,
    totalResults,
    viewType,
    sortBy,
    itemsPerPage,
    handleSearch,
    handleViewChange,
    handleSortChange,
    handleItemsPerPageChange
  } = useMovieContext();

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <ViewToggle viewType={viewType} onViewChange={handleViewChange} />
        <div className="flex flex-col sm:flex-row gap-4">
          <SortFilter sortBy={sortBy} onSortChange={handleSortChange} />
          <ItemsPerPageSelector 
            value={itemsPerPage} 
            onChange={handleItemsPerPageChange} 
          />
        </div>
      </div>

      <SearchBar
        searchQuery={searchQuery}
        onSearch={handleSearch}
        resultsCount={totalResults}
      />
    </>
  );
};

export default ControlPanel;