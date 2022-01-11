import { useReducer } from "react";

const initialState = 0;
//const reducer = (state, action) => {
const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  if (action.type === "reset") {
    return initialState;
  }
  return state;
};

export default function CounterApp() {
  //const [state, setstate] = useState(initialState)
  //const [state, dispatch] = useReducer(reducer, initialState, init);
 
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Clicks: {counter}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
