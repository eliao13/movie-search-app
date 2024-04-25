import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieContainer from "./components/MovieContainer";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [previousSearchValue, setPreviousSearchValue] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const APIKEY = "1d07548";

  async function fetchMovieData() {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchValue}`
    );
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchValue.trim().length > 0) {
        setLoading(true);
        setPreviousSearchValue(searchValue);
        fetchMovieData()
          .then((data) => {
            if (data.Response === "True") {
              setMovieData(data);
              setError(null);
            } else if (data.Response === "False") {
              setMovieData(null);
              setError(data.Error);
            }

            setTimeout(() => {
              setLoading(false);
            }, 1000);
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="movie">
      <header>
        <h1>Movie Search Engine</h1>
      </header>
      <body>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

        {error && (
          <p className="error-message">Oops... {error} Please try again.</p>
        )}

        {movieData && (
          <MovieContainer
            movieData={movieData}
            previosSearchValue={previousSearchValue}
            loading={loading}
          />
        )}
      </body>
    </div>
  );
}

export default App;
