import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { Input, Button } from './Movie.styled';

const API_KEY = '229d78bf5ff22a8500f118108f52c3a1';

export default function MoviesSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie');
  const [search, setSearch] = useState(movie ?? '');
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const handleInputChange = e => {
    console.log(e);
    setSearch(e.currentTarget.value.toLowerCase());
    setSearchParams({ movie: e.currentTarget.value.toLowerCase() });
  };

  const handleInputSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.error('Please, add the film name!');
      return;
    }
  };

  useEffect(() => {
    if (search === null) return;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    )
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, [search]);

  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <Button type="submit">
          <span>Search</span>
        </Button>

        <Input
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search here"
          name="search"
          value={movie ?? ''}
        />
      </form>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <NavLink key={id} to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <Toaster />
    </div>
  );
}
