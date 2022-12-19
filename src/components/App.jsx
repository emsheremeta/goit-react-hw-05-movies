// import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
// import Movies from './Movies';
// import MovieDetails from 'pages/MovieDetails';
import Home from 'pages/Home';
import { useState } from 'react';
import Cast from 'pages/Cast';
import Review from 'pages/Review';

const Movies = lazy(() => import('../components/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
export const App = () => {
  const [search, setSearch] = useState('');

  const handleFormSubmit = search => {
    console.log(search);
    setSearch(search);
  };
  const API_KEY = '229d78bf5ff22a8500f118108f52c3a1';
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home apiKey={API_KEY} />} />
          <Route
            path="movies"
            element={<Movies onSubmit={handleFormSubmit} />}
          />
          <Route
            path="movies/:movieId"
            element={<MovieDetails apiKey={API_KEY} />}
          />
          <Route path="movies/:movieId/cast" element={<div>Cast</div>}></Route>
        </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home apiKey={API_KEY} />} />
          <Route
            path="movies"
            element={<Movies onSubmit={handleFormSubmit} />}
          ></Route>
          <Route
            path="movies/:movieId"
            element={<MovieDetails apiKey={API_KEY} />}
          >
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
/*
  <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home apiKey={API_KEY} />} />
        <Route path="movies" element={<Movies onSubmit={handleFormSubmit} />}>
        </Route>
        <Route path="products" element={<MovieDetails apiKey={API_KEY} />} />
        <Route path="movies/:movieId/cast" element={<div>Cast</div>} />
      </Route>
    </Routes>

    */
