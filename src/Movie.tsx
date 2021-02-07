import React from 'react';

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
    <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </div>
);

export default Movie;