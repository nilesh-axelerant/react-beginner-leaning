import { useState, useEffect } from 'react'

export function Child() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  // Re render every time
  useEffect(() => {
    console.log("re-render");
  })

  // Only changes when mounted and will never executed.
  useEffect(() => {
    console.log("hi");

    return () => {
      console.log("Bye")
    }
  }, [])

  // Only changes when name & age is changed.
  useEffect(() => {
    console.log(`my name is ${name} and age is ${age}`);
  }, [name, age])

  // Only changes when name changed.
  useEffect(() => {
    document.title = name;

    // Log name after 1 sec.
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [name])

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
