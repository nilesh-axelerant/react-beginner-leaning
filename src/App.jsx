import { useState } from 'react'
import { UserLoginStateApp } from './UserLoginStateApp'
import { UserLoginRefApp } from './UserLoginRefApp'


import './styles.css'

function App() {

  // App with useState feature
  return <UserLoginStateApp />

  // App with useRef feature
  return <UserLoginRefApp />
}

export default App
