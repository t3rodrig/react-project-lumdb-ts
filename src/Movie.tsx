import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// @ts-ignore
import Overdrive from 'react-overdrive';

const POSTER_PATH = `${process.env.REACT_APP_IMG_URL}/w154`;

type Props = {
  movie: {
    id: number,
    title: string,  
    poster_path: string,
  };
}

const Movie = ({ movie }: Props) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={`${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
);

export default Movie;

export const Poster = styled.img`
box-shadow: 0 0 35px black;
`