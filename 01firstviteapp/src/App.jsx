import { useState } from 'react'
import Chai from "./chai";
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Chai />
      <div className="card">
        <button onClick={()=> setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
export default App
