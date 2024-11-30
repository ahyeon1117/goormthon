import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("버튼 클릭 시 상태 변화가 UI에 반영된다.", () => {
  // 컴포넌트 렌더링
  render(<App />);

  // 초기 상태 확인
  const counterText = screen.getByText(/Count: 0/i);
  expect(counterText).toBeInTheDocument();

  // 버튼 클릭 이벤트 발생
  const button = screen.getByRole("button", { name: /Increase/i });
  fireEvent.click(button);

  // 상태 변화 후 UI 업데이트 확인
  const updatedCounterText = screen.getByText(/Count: 1/i);
  expect(updatedCounterText).toBeInTheDocument();
});
