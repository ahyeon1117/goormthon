import { createContext, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ApiClient from "./utils/ApiClient";
import { Movie } from "./types/Movie";
import Home from "./Home";
import MovieList from "./components/MovieList";

interface Api {
  baseUrl: string;
}

export const ApiContext = createContext<Api | undefined>(undefined);

function App() {
  const [movies, setMovies] = useState<Movie | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const apiClient = new ApiClient();
  const api: Api = {
    baseUrl: "http://kobis.or.kr/kobisopenapi/webservice/rest",
  };
  const fetchMovies = async () => {
    try {
      setError(null);
      const response: Movie = await apiClient.get(
        `${api.baseUrl}/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_API_KEY}&targetDt=20120101`
      );
      setMovies(response);
    } catch (err) {
      console.error("Failed to fetch movie data:", err);
      setError("Failed to fetch movie data.");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);



  return (
    <ApiContext.Provider value={api}>
      <div>
        {error && <div>{error}</div>}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList movies={movies} />} />
        </Routes>
      </div>
    </ApiContext.Provider>
  );
}

export default App;
