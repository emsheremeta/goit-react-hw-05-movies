import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { TrendingMovies } from './Home.styled';

export default function Home({ apiKey }) {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  console.log(apiKey);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, [apiKey]);
  return (
    <div>
      <TrendingMovies>Today's trending</TrendingMovies>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink key={id} to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
            <Outlet />
          </li>
        ))}
      </ul>
    </div>
  );
}
