import { useState } from 'react'

export function Counter() {

  const [counter, setCounter] = useState(0)
  function handleClick() {
    setCounter((currentCounter) => {
      return currentCounter + 1
    })
  }
  return <h1 onClick={handleClick}>Count: {counter}</h1>
}
