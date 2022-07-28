import React, { useReducer } from "react";

type Props = {};

type CountState = {
  count: number;
};

type actionType = {
  type: string;
  payload?: string;
};

// interface reducerFunction{
//     (state:CountState,
//     action:actionType) : CountState
// }

const reducerFun = (state: CountState, { type }: actionType) => {
  switch (type) {
    case "INCR": {
      return { count: state.count + 1 };
    }
    case "DECR": {
      return { count: state.count - 1 };
    }

    default:
      return state;
  }
};

const initialState: CountState = {
  count: 0,
};

export const Counter = (props: Props) => {
  const [state, dispatch] = useReducer(reducerFun, initialState);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({type:"INCR"})}>Incr</button>
      <button onClick={() => dispatch({type:"DECR"})}>Decr</button>
    </div>
  );
};
