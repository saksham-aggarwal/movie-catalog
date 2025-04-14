const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMG_URL = import.meta.env.VITE_TMDB_IMG_URL;

export const searchMovies = async (query, page = 1, limit = 20) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&per_page=${limit}`
    );
    const data = await response.json();

    // Calculate the correct slice of results
    const startIndex = ((page - 1) * limit) % 20;
    const results = data.results
        // Filter by title match for more accurate results
        .filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        )
        .slice(startIndex, startIndex + limit)
        .map(formatMovieData);

    // Adjust total results to reflect title-only matches
    const titleMatchCount = data.results.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    ).length;

    return {
        results,
        totalPages: Math.ceil(titleMatchCount / limit),
        totalResults: titleMatchCount
    };
};

export const getPopularMovies = async (page = 1, limit = 20) => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&per_page=${limit}`
    );
    const data = await response.json();

    // Calculate the correct slice of results
    const startIndex = ((page - 1) * limit) % 20;
    const results = data.results
        .slice(startIndex, startIndex + limit)
        .map(formatMovieData);

    return {
        results: results, // Limit the results
        totalPages: Math.ceil(data.total_results / limit),
        totalResults: data.total_results
    };
};

const formatMovieData = (movie) => ({
    id: movie.id,
    title: movie.title,
    year: new Date(movie.release_date).getFullYear(),
    director: "N/A", // Would require additional API call
    plot: movie.overview,
    genre: movie.genre_ids.join(", "), // Would need to map to genre names
    rating: movie.vote_average,
    poster: movie.poster_path ? `${IMG_URL}${movie.poster_path}` : null
});