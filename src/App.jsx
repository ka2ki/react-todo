import { useState } from "react";
import "./styles.scss";
import { InputTodo } from "./components/InputTodo";
import { UnfinishedTodos } from "./components/UnfinishedTodos";
import { CompletionTodos } from "./components/CompletionTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [unfinishedTodos, setUnfinishedTodos] = useState([]);
  const [completionTodos, setCompletionTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...unfinishedTodos, todoText];
    setUnfinishedTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...unfinishedTodos];
    newTodos.splice(index, 1);
    setUnfinishedTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newUnfinishedTodos = [...unfinishedTodos];
    newUnfinishedTodos.splice(index, 1);

    const newCompletionTodos = [...completionTodos, unfinishedTodos[index]];
    setUnfinishedTodos(newUnfinishedTodos);
    setCompletionTodos(newCompletionTodos);
  };

  const onClickReturn = (index) => {
    const newCompletionTodos = [...completionTodos];
    newCompletionTodos.splice(index, 1);

    const newUnfinishedTodos = [...unfinishedTodos, completionTodos[index]];
    setCompletionTodos(newCompletionTodos);
    setUnfinishedTodos(newUnfinishedTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={unfinishedTodos.length >= 5}
      />
      {/* 登録できるTODOの上限を設定 */}
      {unfinishedTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5こまでだよ〜。消化しろ！
        </p>
      )}

      <UnfinishedTodos
        todos={unfinishedTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompletionTodos todos={completionTodos} onClickReturn={onClickReturn} />
    </>
  );
};
