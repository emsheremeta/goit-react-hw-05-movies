import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams, NavLink, useLocation } from 'react-router-dom';
import { Input, Button } from './Movie.styled';

const API_KEY = '229d78bf5ff22a8500f118108f52c3a1';

export default function MoviesSearch({ onSubmit }) {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const handleInputChange = e => {
    console.log(e);
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleInputSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.error('Please, add the film name!');
      return;
    }
    onSubmit(search);
  };

  useEffect(() => {
    console.log('fetch');
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
    </div>
  );
}

/* import { useState, useEffect } from 'react';

const API_KEY = '229d78bf5ff22a8500f118108f52c3a1';

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/search-movie?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(console.log);
  }, []);
  return <div>hi</div>;
}
*/
