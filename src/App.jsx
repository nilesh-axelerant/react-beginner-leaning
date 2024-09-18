import { useState } from 'react'
import { Counter } from './Counter'
import { FunctionComponent } from './FunctionComponent'
import { Child } from './Child'
import { ChildClass } from './ChildClass'

function slowGetter() {
  console.log("Slow function, called every time");
  return "ND";
}

function App() {

  const [show, setShow] = useState(true)

  const childComponent = show ? <Child /> : null
  const childClassComponent = show ? <ChildClass /> : null

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

  // return <FunctionComponent />
  // @todo - Uncomment for function component feature

  return (
    <div>
      <button onClick={() => setShow(currentShow => !currentShow)}>
        Show/Hide
      </button>
      {/* {childComponent} */}
      {childClassComponent}
    </div>
  )

}

export default App
