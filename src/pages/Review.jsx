import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Reviews } from './Review.styled';

const API_KEY = '229d78bf5ff22a8500f118108f52c3a1';

export default function Review() {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setReview(data.results))
      .then(console.log);
  }, [movieId]);

  if (review.length === 0) {
    return <p>No review available.</p>;
  }

  return (
    review && (
      <div>
        <ul>
          {review.map(({ id, author, content }) => {
            return (
              <Reviews key={id}>
                <b>AUTHOR: {''}</b>
                <br />
                {author}
                <li key={id}>{content}</li>
              </Reviews>
            );
          })}
        </ul>
      </div>
    )
  );
}
