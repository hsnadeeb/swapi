import React, { useState, useEffect } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [retryTimeout, setRetryTimeout] = useState(null);

  useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(fetchMoviesHandler, 5000);
      setRetryTimeout(timeout);
    } else {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
        setRetryTimeout(null);
      }
    }
  }, [errorMessage]);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error("Something went wrong ... Retrying");
      }
      const data = await response.json();

      const transformMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformMovies);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMoviesHandler(); 
  }, []);

  function cancelRetryHandler() {
    if (retryTimeout) {
      clearTimeout(retryTimeout);
      setRetryTimeout(null);
      setErrorMessage(null); 
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading...:-)</p>}
        {!isLoading && errorMessage && (
          <p>
            {errorMessage}
            <button onClick={cancelRetryHandler}>Cancel</button>
          </p>
        )}
        {!isLoading && !errorMessage && movies.length === 0 && <p>No Movies</p>}
        {!isLoading && !errorMessage && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
