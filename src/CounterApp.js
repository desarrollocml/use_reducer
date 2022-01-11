import { useReducer } from "react";

//const reducer = (state, action) => {
const reducer = (state, action) => {
  return state;
};


export default function CounterApp() {

  //const [state, setstate] = useState(initialState)
  //const [state, dispatch] = useReducer(reducer, initialState, init);
  //const initialState=0;
  const [counter, dispatch] = useReducer(reducer, 4);
  return (
    <div>
      <h1>Clicks: {counter}</h1>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}
