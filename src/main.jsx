import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CounterClass from './CounterClass.jsx'

createRoot(document.getElementById('root')).render(<App />)
// createRoot(document.getElementById('root')).render(<CounterClass />)
// @todo - uncomment CounterClass and CounterClass render to check counter feature through the class.

