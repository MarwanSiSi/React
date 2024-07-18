import { useEffect, useState, useRef } from "react";
import StarRating from "./StarRating";
import { CircularProgress } from "@mui/material";
import { useKey } from "./useKey";

export const MoviesDetails = ({
  selectedId,
  handleCloseMovieDetails,
  setWatched,
  setSelectedId,
  watched,
  setUserRating,
  userRating,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const countRef = useRef(0);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(
    function () {
      if (userRating) countRef.current += 1;
    },
    [userRating]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=966a5331&i=${selectedId}`
        );
        const data = await res.json();

        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "🍿usePopcorn";
      };
    },
    [title]
  );

  useKey("Escape", handleCloseMovieDetails);

  const isWatched = watched.some((movie) => movie.imdbID === selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  function handleAddToWatched() {
    if (isWatched) {
      setSelectedId(null);
      return;
    }

    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      userRating,
      runtime: Number(runtime.split(" ")[0]),
      countRatingDecisions: countRef.current,
    };

    setWatched((prev) => [...prev, newWatchedMovie]);

    setSelectedId(null);
  }

  return (
    <div className="details">
      {isLoading ? (
        <div className="loader-container">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={handleCloseMovieDetails}>
              X
            </button>
            <img src={poster} alt={title} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>⭐ {imdbRating} IMDb rating</p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddToWatched}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie {watchedUserRating}⭐</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};
