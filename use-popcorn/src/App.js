import { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { Main } from "./Main";
import { NumResults } from "./NumResults";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

import { MovieList } from "./MovieList";
import { Box } from "./Box";
import { Summary } from "./Summary";
import { WatchedMovieList } from "./WatchedMovieList";
import { MoviesDetails } from "./MoviesDetails";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const [userRating, setUserRating] = useState(0);

  const [selectedId, setSelectedId] = useState(null);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleCloseMovieDetails() {
    setSelectedId(null);
  }

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box
          error={error}
          isLoading={isLoading}
          isOpen={isOpen1}
          setIsOpen={setIsOpen1}
        >
          <MovieList setSelectedId={setSelectedId} movies={movies} />
        </Box>

        <Box isOpen={isOpen2} setIsOpen={setIsOpen2}>
          {selectedId ? (
            <MoviesDetails
              userRating={userRating}
              setUserRating={setUserRating}
              watched={watched}
              setSelectedId={setSelectedId}
              setWatched={setWatched}
              handleCloseMovieDetails={handleCloseMovieDetails}
              selectedId={selectedId}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedMovieList
                userRating={userRating}
                watched={watched}
                setWatched={setWatched}
                selectedId={selectedId}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
