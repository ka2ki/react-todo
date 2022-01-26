export const CompletionTodos = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="completion_area">
      <h2 className="area_title">完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <p>{todo}</p>
              <div className="btn_wrap">
                <button
                  onClick={() => onClickReturn(index)}
                  className="btn --return"
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
