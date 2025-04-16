# Movie Vault

A Simple React application for browsing and searching movies with filtering, sorting, and detailed views.

## Features

- Search for movies by title
- Toggle between grid and list views
- Filter and sort by various criteria (title, year, rating)
- Responsive design for devices
- Detailed movie information modal
- Pagination support

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Lucide React for icons
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/saksham-aggarwal/movie-catalog.git
cd movie-catalog
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Create environment files:

Create a `.env` file in the root directory with the following variables:

```env
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMG_URL=https://image.tmdb.org/t/p/w500
VITE_TMDB_AUTH_TOKEN=your_tmdb_auth_token_here
```

### Running the Application

#### Development Mode

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` in your browser to see the application.

#### Production Build

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

### Docker Support

This application includes Docker support for easy deployment.

#### Build Docker Image

```bash
npm run docker:build
# or
yarn docker:build
```

#### Run Docker Container

```bash
npm run docker:run
# or
yarn docker:run
```

This will start the container at `http://localhost:4001`.

#### Stop Docker Container

```bash
npm run docker:stop
# or
yarn docker:stop
```

## Getting a TMDB API Key

The application uses The Movie Database (TMDB) API to fetch movie data. You'll need to obtain an API key:

1. Create an account at [The Movie Database](https://www.themoviedb.org)
2. Once registered and logged in, go to your account settings
3. Click on the "API" link in the left sidebar
4. Follow the instructions to apply for an API key (select "Developer" option)
5. After approval, you'll receive an API key
6. In the TMDB API settings page, navigate to the "API Read Access Token" section
7. Copy the read access token
8. Add this token to your `.env` file as `VITE_TMDB_AUTH_TOKEN`

Note: If you don't provide an API key, the application will use mock data instead.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_TMDB_BASE_URL` | Base URL for TMDB API requests |
| `VITE_TMDB_IMG_URL` | Base URL for TMDB image paths |
| `VITE_TMDB_AUTH_TOKEN` | Your TMDB API read access token |

## Project Structure

```
movie-vault/
├── public/             # Static assets
├── src/
│   ├── assets/         # Local assets
│   ├── components/     # React components
│   ├── context/        # React context providers
│   ├── data/           # Mock data
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API services
│   ├── App.jsx         # Main App component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── .dockerignore       # Docker ignore file
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Git ignore file
├── Dockerfile          # Docker configuration
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
└── vite.config.js      # Vite configuration
```

## Mock Data

If the TMDB API key is not available, the application will use mock data from `src/data/mockMovies.jsx`.

## Acknowledgements

- [The Movie Database (TMDB)](https://www.themoviedb.org) for providing the API
- [Lucide React](https://lucide.dev) for icons
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Vite](https://vitejs.dev) for the build system