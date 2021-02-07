import React from 'react';
import { Link } from 'react-router-dom';

const POSTER_PATH = `${process.env.REACT_APP_IMG_URL}/w154`;

type Props = {
  movie: {
    id: number,
    title: string,  
    poster_path: string,
  };
}

const Movie = ({ movie }: Props) => (
  <div>
    <Link to={`/${movie.id}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
  </div>
);

export default Movie;