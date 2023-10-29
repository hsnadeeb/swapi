import React, { useRef } from 'react';
import './Form.css';

// import classes from './Form.css';

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
    titleRef.current.value = '';
    openingTextRef.current.value = '';
    releaseDateRef.current.value = '';
  }

  return (
    <form onSubmit={submitHandler} className="form">
    <div className="control">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" ref={titleRef} />
    </div>
    <div className="control">
      <label htmlFor="opening-text">Opening Text</label>
      <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
    </div>
    <div className="control">
      <label htmlFor="date">Release Date</label>
      <input type="date" id="date" ref={releaseDateRef} />
    </div>
    <button>Add Movie</button>
  </form>
  );
}

export default AddMovie;


