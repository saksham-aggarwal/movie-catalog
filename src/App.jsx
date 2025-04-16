import { MovieProvider } from './context/MovieContext';
import MovieLayout from './components/MovieLayout';

const App = () => {
    return (
        <MovieProvider>
            <MovieLayout />
        </MovieProvider>
    );
};

export default App;