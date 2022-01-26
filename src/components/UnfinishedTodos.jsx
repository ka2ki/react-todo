export const UnfinishedTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="unfinished_area">
      <h2 className="area_title">未完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <p>{todo}</p>
              <div className="btn_wrap">
                <button
                  onClick={() => onClickComplete(index)}
                  className="btn --comp"
                >
                  完了
                </button>
                <button
                  onClick={() => onClickDelete(index)}
                  className="btn --remove"
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
