import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import {
  Image,
  Wrapper,
  Article,
  Button,
  Information,
} from './MovieDetails.styled';

export default function MovieDetails({ apiKey }) {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  console.log(movieId);
  const back = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    console.log('fetch');
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [movieId, apiKey]);

  return (
    movie && (
      <div>
        <Button to={back.current.pathname + back.current.search}>
          <span>&#8592;</span>
          Go back
        </Button>
        <Image
          src={
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2' +
            movie.poster_path
          }
          width={300}
        ></Image>
        <Wrapper>
          <p>
            <b>Movie title :</b>
            <br />
            {movie.title}
          </p>
          <p>
            <b>User score </b>
            <br />
            {movie.vote_average}
          </p>
          <Article>
            <b>Overview :{''}</b>
            <br />
            {movie.overview}
          </Article>
          <p>
            <b> Genres: </b>
            <br />
            {movie.genres.map(el => {
              return el.name + ' ';
            })}
          </p>
          <Information>
            <b>Additional information</b>
            <br />
            <NavLink to={'cast'}>
              Show cast
              <br />
            </NavLink>
            <NavLink to={'review'}>Show review</NavLink>
          </Information>
        </Wrapper>
        <Outlet />
      </div>
    )
  );
}
