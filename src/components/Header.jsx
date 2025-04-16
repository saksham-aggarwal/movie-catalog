import { Film } from 'lucide-react';

const Header = () => {
  return (
    <header className="mb-8 text-center" role="banner">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Film className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Movie Vault</h1>
      </div>
      <p className="text-gray-600">Search for your favorite movies</p>
    </header>
  );
};

export default Header;