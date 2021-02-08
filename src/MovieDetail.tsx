import React, { useState, useEffect } from 'react';

const POSTER_PATH = `${process.env.REACT_APP_IMG_URL}/w154`;
const BACKDROP_PATH = `${process.env.REACT_APP_IMG_URL}/w1280`;
const params = `api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
const url = `${process.env.REACT_APP_API_URL}/movie`;

const MovieDetail = ({ match }: {match: any}) => {
  const [movie, setMovie] = useState<any>({});

  const fetchMovie = async (arg: any) => {
    const { id } = arg.params;
    try {
      const res = await fetch(`${url}/${id}?${params}`);
      const data = await res.json();
      setMovie(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovie(match);
  }, [match]);

  return (
    <div>
      <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      <h1>{movie.title}</h1>
      <h3>{movie.release_date}</h3>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieDetail
