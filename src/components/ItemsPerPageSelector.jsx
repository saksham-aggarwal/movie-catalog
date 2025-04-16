import { ListFilter } from 'lucide-react';

const ItemsPerPageSelector = ({ value, onChange }) => {
  const options = [5, 10, 20];

  return (
    <div className="flex items-center">
      <label htmlFor="items-per-page" className="mr-2 text-sm text-gray-700 whitespace-nowrap">
        <ListFilter className="h-4 w-4 inline-block mr-1" />
        Per page:
      </label>
      <select
        id="items-per-page"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border border-gray-300 rounded-md p-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ItemsPerPageSelector;