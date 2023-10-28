import React, { useState } from 'react';
import './Form.css'
import '../App.css';

function Form() {
  const [newMovie, setNewMovie] = useState({
    title: '',
    openingText: '',
    releaseDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  const addMovieHandler = () => {
    console.log(newMovie);
    setNewMovie({
        title: '',
        openingText: '',
        releaseDate: '',
      });
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newMovie.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="openingText">Opening Text:</label>
          <textarea
            id="openingText"
            name="openingText"
            value={newMovie.openingText}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date:</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={newMovie.releaseDate}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={addMovieHandler}>
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default Form;
