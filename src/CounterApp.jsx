import { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
}

function reducer(count, action) {

  switch (action.type) {
    case ACTIONS.INCREMENT:
      return count+1
    case ACTIONS.DECREMENT:
      return count-1
    case ACTIONS.RESET:
      return 0

    default:
      return count
  }
  return count;
}

export function CounterApp({initalCount = 0}) {

  const [count, dispatch] = useReducer(reducer, initalCount)

  return (
    <>
      <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
      {count}
      <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>

      <br/>
      <button onClick={() => dispatch({type: ACTIONS.RESET})}>RESET</button>
    </>
  )
}
