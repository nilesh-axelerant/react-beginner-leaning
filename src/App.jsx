import { useState } from 'react'
import { Counter } from './Counter'
import { FunctionComponent } from './FunctionComponent'

function slowGetter() {
  console.log("Slow function, called every time");
  return "ND";
}

function App() {

  const [name, setName] = useState(() => {
    console.log("Setter function to set the name")
    return "Nilesh"
  });
  const [age, setAge] = useState(27)

  const [counter, setCounter] = useState(0)
  function handleClick() {
    setName("Nilesh Desai");
    setCounter((currentCounter) => {
      return currentCounter + 1
    })
  }
  // return <h1 onClick={handleClick}>Current Count: {counter}</h1>
  // @todo - Uncommen above code to check counter feature.

  // return <Counter/>
  // @todo - Uncomment above code to see counter feature through counter class.

  return <FunctionComponent />

}

export default App
