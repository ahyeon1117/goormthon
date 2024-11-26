import React,{useState,useEffect} from 'react';
import ApiClient from './utils/ApiClient';
import { Movie } from './types/Movie';
import MovieList from './components/MovieList';


function App() {
  const [movies, setMovies] = useState<Movie>();
  const [error, setError] = useState<string | null>(null);
  const apiClient = new ApiClient();
  // const today = new Date();

  // function formatDateToYYYYMMDD(date: Date): string {
  //   const year = date.getFullYear(); // 연도 가져오기
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1, 두 자리로 포맷
  //   const day = date.getDate().toString().padStart(2, '0'); // 일자 두 자리로 포맷
  
  //   return `${year}${month}${day}`;
  // }
  const fetchMovies = async () => {
    try {
      setError(null);
      const response:Movie = await apiClient.get(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_API_KEY}&targetDt=20120101`
      );
      setMovies(response);
    } catch (err) {
      setError('Failed to fetch movie data.');
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  
  console.log(movies);
  return (
    <div className="app">
      <MovieList movies={movies}></MovieList>
    </div>
  );
}

export default App;
