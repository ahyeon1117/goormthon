import { Movie, DailyBoxOfficeList } from "../types/Movie";
import { useParams } from "react-router-dom";
import posterImg from "../assets/img/grid2.jpeg"

interface MovieDetailProps {
  movies: Movie | undefined;
}

const description: Record<string, string> = {
  rnum: "순번을 출력합니다",
  rank: "해당일자의 박스오피스 순위를 출력합니다",
  rankInten: "전일대비 순위의 증감분을 출력합니다",
  rankOldAndNew: "랭킹에 신규진입여부를 출력합니다. “OLD” : 기존 , “NEW” : 신규",
  movieCd: "영화의 대표코드를 출력합니다",
  movieNm: "영화명(국문)을 출력합니다",
  openDt: "영화의 개봉일을 출력합니다",
  salesAmt: "해당일의 매출액을 출력합니다",
  salesShare: "해당일자 상영작의 매출총액 대비 해당 영화의 매출비율을 출력합니다",
  salesInten: "전일 대비 매출액 증감분을 출력합니다",
  salesChange: "전일 대비 매출액 증감 비율을 출력합니다",
  salesAcc: "누적매출액을 출력합니다",
  audiCnt: "해당일의 관객수를 출력합니다",
  audiInten: "전일 대비 관객수 증감분을 출력합니다",
  audiChange: "전일 대비 관객수 증감 비율을 출력합니다",
  audiAcc: "누적관객수를 출력합니다",
  scrnCnt: "해당일자에 상영한 스크린수를 출력합니다",
  showCnt: "해당일자에 상영된 횟수를 출력합니다",
};

function MovieDetail({ movies } : MovieDetailProps) {
  const { id } = useParams<{ id: string }>();

  // URL에서 가져온 `id`를 숫자로 변환
  const numericId: number | undefined = id ? parseInt(id, 10) : undefined;

  // 유효하지 않은 `id` 처리
  if (numericId === undefined || isNaN(numericId)) {
    return <p>잘못된 영화 ID입니다.</p>;
  }

  // 영화 상세 정보 가져오기
  const movieDetail: DailyBoxOfficeList | undefined =
    movies?.boxOfficeResult.dailyBoxOfficeList[numericId];

  // 영화 정보가 없을 경우 처리
  if (!movieDetail) {
    return <p>영화 정보를 불러올 수 없습니다.</p>;
  }

  // 렌더링
  return (
    <div className="app">
      <img src={posterImg} alt="munzi" width={400} height={400}/>
      <h1>{movieDetail.movieNm} 상세 정보</h1>
      <ul>
        {Object.keys(movieDetail).map((key) => (
          <li key={key}>
            <strong>{description[key] || key}:</strong> {movieDetail[key as keyof DailyBoxOfficeList]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;
