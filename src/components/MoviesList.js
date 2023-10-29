// MoviesList.js
import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  const { movies, onDeleteMovie } = props;

  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDelete={() => onDeleteMovie(movie.id)}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
