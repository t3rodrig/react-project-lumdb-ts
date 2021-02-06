import React from 'react';

type Props = {
  movie: { title: string };
}

const Movie = ({ movie }: Props) => {
  return (
    <div>
      {movie.title}
    </div>
  )
};

export default Movie;