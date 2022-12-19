import { element } from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { TrendingMovies } from './Home.styled';

export default function Home({ apiKey }) {
  const [movies, setMovies] = useState([]);

  console.log(apiKey);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);
  return (
    <div>
      <TrendingMovies>Today's trending</TrendingMovies>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink key={id} to={`/movies/${id}`}>
              {title}
            </NavLink>
            <Outlet />
          </li>
        ))}
      </ul>
    </div>
  );
}
