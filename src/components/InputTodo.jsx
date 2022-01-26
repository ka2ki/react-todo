export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input_area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <div className="btn_wrap">
        <button disabled={disabled} onClick={onClick} className="btn --add">
          追加
        </button>
      </div>
    </div>
  );
};
