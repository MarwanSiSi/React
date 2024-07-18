import { useEffect } from "react";
export function WatchedMovieList({ watched, setWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          watched={watched}
          setWatched={setWatched}
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie, watched, setWatched, selectedId }) {
  function handleDeleteWatchedMovie() {
    const newWatchedMovies = watched.filter(
      (watchedMovie) => watchedMovie.imdbID !== movie.imdbID
    );

    setWatched(newWatchedMovies);
  }

  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button onClick={handleDeleteWatchedMovie} className="btn-delete">
          X
        </button>
      </div>
    </li>
  );
}
