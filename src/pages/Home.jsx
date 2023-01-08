import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { TrendingMovies, Wrapper, Link } from './Home.styled';

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
    <Wrapper>
      <TrendingMovies>Today's trending </TrendingMovies>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
            <Outlet />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
