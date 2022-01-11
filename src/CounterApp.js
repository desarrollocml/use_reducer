import { useReducer } from "react";

const initialState = 0;
//const reducer = (state, action) => {
const reducer = (state, action) => {
  switch(action.type){
      case "increment":
          return state+1;
      case "decrement":
          return state-1;
      case "reset":
          return 0;
      default :
        return state;    

  }  

};

export default function CounterApp() {
  //const [state, setstate] = useState(initialState)
  //const [state, dispatch] = useReducer(reducer, initialState, init);

  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Clicks: {counter}</h1>
      <button
        onClick={() => dispatch({ type: "increment"})}
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
