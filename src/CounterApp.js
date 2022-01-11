import { useReducer } from "react";

const types={
    increment : 'increment',
    decrement : 'decrement',
    reset : 'reset'
}

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

  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Clicks: {counter}</h1>
      <button
        onClick={() => dispatch({ type: types.increment})}
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: types.decrement })}>Decrement</button>
      <button onClick={() => dispatch({ type: types.reset })}>Reset</button>
    </div>
  );
}
