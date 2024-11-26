// import React,{useState,useEffect} from 'react';
import {Movie} from "../types/Movie"
interface MovieListProps {
  movies: Movie |  undefined;
}

function MovieList({ movies }: MovieListProps) {
  if (!movies) {
    return <p>영화 정보를 불러올 수 없습니다.</p>; // undefined인 경우 처리
  }
  return (
    <div className="app">
      {movies.boxOfficeResult.dailyBoxOfficeList.length > 0 ? (
        <ul>
          {movies.boxOfficeResult.dailyBoxOfficeList.map((movie) => (
            <li key={movie.movieCd}>
              {movie.movieCd} / {movie.movieNm}
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
