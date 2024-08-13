import { useState, useEffect } from "react";

const omdbApiURL = "https://www.omdbapi.com/?apikey=4aa25208&";

// FETCH MOVIES FROM API BASED ON QUERY
// && HANDLES SIMPLE ERRORS AND LOADING STATES
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    // ?. means optional chaining
    //   callback?.();

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${omdbApiURL}s=${query}`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();

        if (data.Response === "False") throw new Error("No movies found");
        setMovies((movies) => data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    //   handleCloseMovie();
    fetchMovies();

    return function () {
      controller.abort();
    };
  }, []);

  return { movies, isLoading, error };
}
