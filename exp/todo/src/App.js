import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const defaultTodoData = {
    id: Date.now(), // 고유 ID 생성
    title: "",
    edit: false,
    completed: false
  };

  // 로컬 스토리지에서 데이터 가져오기
  const getLocalStorageData = () => {
    const storedData = localStorage.getItem("todoData");
    return storedData ? JSON.parse(storedData) : [];
  };
  const [todoData, setTodoData] = useState(getLocalStorageData);

  const addTodo = () => {
    setTodoData((prevData) => [...prevData, { ...defaultTodoData }]);
  };

  const handleDelete = (id) => {
    setTodoData((prevData) => prevData.filter((todo) => todo.id !== id));
  };

  const handleEditToggle = (id) => {
    setTodoData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, edit: !item.edit } : item
      )
    );
  };

  // 로컬 스토리지에 데이터 저장
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <div className="App">
      <article className="mgL12">
        <header className="headerStyle">
          <h1>Todos App</h1>
          <div className="headerBtn" onClick={addTodo}>
            새로운 TODO 추가하기
          </div>
        </header>
        <div className="contents">
          {todoData.map((todo) => (
            <div key={todo.id} className="inputStyle">
              <input
                type="checkbox"
                className="checkBoxStyle"
                checked={todo.completed}
                onChange={() => {
                  setTodoData((prevData) =>
                    prevData.map((item) =>
                      item.id === todo.id
                        ? { ...item, completed: !item.completed }
                        : item
                    )
                  );
                }}
              />
              <input
                className={
                  todo.completed == false
                    ? "inputText mgL12"
                    : "completeText mgL12"
                }
                disabled={!todo.edit}
                value={todo.title}
                onChange={(e) => {
                  setTodoData((prevData) =>
                    prevData.map((item) =>
                      item.id === todo.id
                        ? { ...item, title: e.target.value }
                        : item
                    )
                  );
                }}
              />
              <div>
                <button onClick={() => handleEditToggle(todo.id)}>
                  {todo.edit ? "완료" : "수정"}
                </button>
                <button onClick={() => handleDelete(todo.id)}>삭제</button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default App;
