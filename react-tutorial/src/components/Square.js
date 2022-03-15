export function Square(props) {
  return (
    <button
      className="square"
      style={{color: "red"}}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
