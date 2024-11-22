function calculate(operator, value1, value2) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };
  return operations[operator]?.(value1, value2) ?? 0;
}

function basicsMethods() {
  // 1부터 10까지의 숫자를 배열에 저장
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  console.log("초기 배열:", numbers);
  // 배열에서 push를 사용하여 값 추가
  numbers.push(11, 12); // 11과 12를 추가
  console.log("push로 값 추가 후:", numbers);
  // 배열에서 pop을 사용하여 값 삭제
  const poppedValue = numbers.pop(); // 마지막 값(12)을 제거
  console.log("pop으로 값 삭제 후:", numbers, "(삭제된 값:", poppedValue, ")");
  // 배열에서 slice를 사용하여 특정 범위 추출
  const slicedArray = numbers.slice(3, 7); // 인덱스 3부터 6까지 (4번째~7번째)
  console.log("slice로 추출된 값:", slicedArray);
  // 문자열 조작
  const originalString = "hello, world!";
  console.log("원래 문자열:", originalString);
  // 문자열을 대문자로 변환
  const upperCaseString = originalString.toUpperCase(); // HELLO, WORLD!
  console.log("대문자로 변환:", upperCaseString);
  // 문자열의 일부 추출
  const substringValue = originalString.substring(7, 12); // "world"
  console.log("substring으로 추출:", substringValue);
}

function forloopPractice() {
  // 1. 숫자 배열에서 짝수만 골라 출력 (if와 for 사용)
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("짝수 출력:");
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
    }
  }

  // 2. for...of 문을 사용하여 조건에 맞는 값 필터링
  const words = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape"
  ];
  console.log("\n5글자 이상의 단어:");
  for (const word of words) {
    if (word.length >= 5) {
      console.log(word);
    }
  }
}

const readline = require("readline");

function collectUserData() {
  const users = [];
  let totalAge = 0;
  let count = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askQuestion() {
    rl.question(`사용자 ${count + 1}의 이름을 입력하세요: `, (name) => {
      rl.question(`사용자 ${count + 1}의 나이를 입력하세요: `, (age) => {
        age = parseInt(age, 10);
        if (isNaN(age)) {
          console.log("올바른 나이를 입력하세요.\n");
          return askQuestion(); // 나이를 잘못 입력한 경우 다시 질문
        }

        users.push({ name, age });
        totalAge += age;
        count++;

        if (count < 3) {
          askQuestion(); // 다음 사용자 입력
        } else {
          rl.close(); // 입력 종료
          console.log("\n입력된 사용자 정보:");
          users.forEach((user, index) => {
            console.log(
              `사용자 ${index + 1}: 이름 - ${user.name}, 나이 - ${user.age}`
            );
          });

          const averageAge = totalAge / users.length;
          console.log(`사용자들의 나이 평균: ${averageAge.toFixed(2)}`);
        }
      });
    });
  }

  askQuestion();
}

// 함수 실행
collectUserData();
