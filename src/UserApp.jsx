import { useState, useEffect } from 'react'
import { User } from './User'

export function UserApp() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const controller = new AbortController()
    fetch("./public/users.json",{
      signal: controller.signal
    })
    .then(res => res.json())
    .then(setUsers)
    .finally(() => {
      setIsLoading(false)
    })

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
    <h1>Users List</h1>
    {isLoading ? (
        "Loading...."
    ) : (
      <ul>
        {users != null && users.map(user => {
          return <User key={user.id} {...user}></User>
        })}
      </ul>
    )}
    </>
  )
}
