import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todo'

function App() {
  
  return (
    <div className="glass-panel p-8 w-full shadow-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8 drop-shadow-sm tracking-tight">
        Todo Master
      </h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App