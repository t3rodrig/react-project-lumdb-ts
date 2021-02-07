import React from 'react';

type Props = {
  movie: { title: string };
}

const Movie = ({ movie }: Props) => (
  <div>
    <h3>{movie.title}</h3>
  </div>
);

export default Movie;