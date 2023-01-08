import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Character, Actors } from './Cast.styled';
const API_KEY = '229d78bf5ff22a8500f118108f52c3a1';

export default function Cast() {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    console.log(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setCast(data.cast));
  }, [movieId]);

  if (!cast) {
    return;
  }
  return (
    cast && (
      <Actors>
        {cast
          .filter(el => {
            return el.profile_path !== null;
          })
          .map(({ id, profile_path, name, character }) => {
            return (
              <Character key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={'images'}
                  width={200}
                ></img>
                <li key={id}>
                  <b>Name: </b>
                  <br />
                  {name}
                </li>
                <li>
                  <b>Character : </b>
                  <br />
                  {character}
                </li>
              </Character>
            );
          })}
        {/* {cast.map(({ id, name, character }) => (
          <li key={id}>
            <NavLink key={id}>{name}</NavLink>
            <NavLink key={character}>{character}</NavLink>
          </li>
        ))} */}
        <Outlet />
      </Actors>
    )
  );
}
//https://image.tmdb.org/t/p/w600_and_h900_bestv2/6RVxNlNmc0DIfZzaJKCJM43If3M.jpg
