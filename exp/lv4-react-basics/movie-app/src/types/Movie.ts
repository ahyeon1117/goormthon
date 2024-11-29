export interface Movie {
  boxOfficeResult:{
    boxofficeType:string, // 박스오피스 종류를 출력합니다.
    showRange:string // 박스오피스 조회 일자를 출력합니다.
    dailyBoxOfficeList: DailyBoxOfficeList[]
  }
}

export interface DailyBoxOfficeList{
  rnum: string
  rank: string
  rankInten: string
  rankOldAndNew: string
  movieCd: string
  movieNm: string
  openDt: string
  salesAmt: string
  salesShare: string
  salesInten: string
  salesChange: string
  salesAcc: string
  audiCnt: string
  audiInten: string
  audiChange: string
  audiAcc: string
  scrnCnt: string
  showCnt: string
}