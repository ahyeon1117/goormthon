class Random {
  getRandomBirthday() {
    const startYear = 2000;
    const endYear = 2023;
    const randomYear =
      Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const randomMonth = Math.floor(Math.random() * 12); // 0 ~ 11 (0 = 1월)
    const randomDay =
      Math.floor(
        Math.random() * new Date(randomYear, randomMonth + 1, 0).getDate()
      ) + 1;

    // Date 객체로 생일 생성
    return `${randomYear}년 ${randomMonth}월 ${randomDay}일`;
  }
  chooseRandom(randomArr) {
    const randomIndex = Math.floor(Math.random() * randomArr.length);
    return randomArr[randomIndex];
  }
}
export default Random;
