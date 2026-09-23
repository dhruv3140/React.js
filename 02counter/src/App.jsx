import { useState } from 'react'
import './App.css'
function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    if(counter==20){
      alert("counter cannot be greater than 20");
    }else{
      setCounter(counter + 1);
    }
  }
  const removeValue = () => {
    if (counter == 0) {
      alert("counter cannot be less than 0");
    } else {
      setCounter(counter - 1);
    }
  }
  const resetValue = () => {
    setCounter(0);
  }
  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>counter value is : {counter}</h2>
      <button
        onClick={addValue}>Add value</button>
      <br />
      <button
        onClick={removeValue}>Remove value</button>
    </>
  )
}
export default App
