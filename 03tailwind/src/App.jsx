import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  let data = [
    {
      name: "code with Harry",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Cristiano_Ronaldo_20120609.jpg?_=20120618215538"
    },
    {
      name: "CodeWithJawed",
      img: "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
    },
    {
      name: "ApnaCollege",
      img: "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
    },
  ]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-3xl' >Tailwind Project</h1>
      <Card userName="code with Harry" obj={data[0]} />
      <Card userName="CodeWithJawed" obj={data[1]} />
      <Card userName="ApnaCollege" obj={data[2]} />
    </>
  )
}

export default App
