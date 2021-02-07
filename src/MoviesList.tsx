import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const params = `api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const url = `${process.env.REACT_APP_API_URL}/discover/movie?${params}`;

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await (fetch(url));
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie: any) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MoviesList
