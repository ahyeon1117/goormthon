import React from "react";
import { Movie } from "../types/Movie";
import { useContext } from "react";
import { ApiContext } from "../App";
import { Link } from "react-router-dom";
interface MovieListProps {
    movies: Movie | undefined;
}

function MovieList({ movies }: MovieListProps) {
    
    const context = useContext(ApiContext);
    if (!context) {
        return <p>API 정보를 사용할 수 없습니다.</p>;
    }
    const { baseUrl } = context;

    if (!movies || !movies.boxOfficeResult || !movies.boxOfficeResult.dailyBoxOfficeList) {
      return <p>영화 데이터를 불러오는 중입니다...</p>;
    }

    return (
        <div className="app">
            <p>Base URL: {baseUrl}</p>
            {movies.boxOfficeResult.dailyBoxOfficeList.length > 0 ? (
                <ul>
                    {movies.boxOfficeResult.dailyBoxOfficeList.map((movie, idx) => (
                        <li key={idx}>
                          <Link to={"/movies/" + idx}>
                            {movie.movieCd} / {movie.movieNm}
                          </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>표시할 영화가 없습니다.</p>
            )}
        </div>
    );
}

export default MovieList;
