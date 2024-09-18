import { useState, useEffect } from 'react'

export function FunctionComponent() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  useEffect(() => {
    console.log("Age is changed to", age)
  }, [age])

  // Only changes when mounted and will never executed.
  useEffect(() => {
    console.log("Mount component")
  }, [])

  return (
    <div>
      <input value={name} onChange={e=>setName(e.target.value)} />
      <br/>
      <br/>
      <button onClick={() => setAge(currentAge => currentAge-1)}>-</button>
      {age}
      <button onClick={() => setAge(currentAge => currentAge+1)}>+</button>
      <br/>
      My Name is {name} and my age is {age}
    </div>
  )
}
