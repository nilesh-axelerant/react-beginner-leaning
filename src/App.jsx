import { useState, useEffect } from 'react'
import { UserApp } from './UserApp'
import { TodoListApp } from './TodoListApp'
import { UseFetchApp } from './UseFetchApp'
import { UseArrayApp } from './UseArrayApp'
import { LocalStorageApp } from './LocalStorageApp'
import "./style.css"

function App() {


  return (
    // <UserApp />
    // @todo - Uncomment above code to see users list from API.

    // <TodoListApp />
    // @todo - uncomment above code to see todo list feature.

    // <UseFetchApp />
    // App to showcase use fetch hook usage.

    // <UseArrayApp />
    // App to showcase use array functionality

    <LocalStorageApp />
    // App to showcase local storage feature.
  )
}

export default App
