import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/Todo/TodoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return;
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="flex flex-col sm:flex-row gap-3 mb-10 w-full">
      <input
        type="text"
        className="custom-input flex-1 rounded-xl px-5 py-3 text-lg shadow-inner placeholder-gray-400/80 font-medium"
        placeholder="What do you need to do?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="custom-btn text-white font-bold py-3 px-8 rounded-xl shadow-lg whitespace-nowrap text-lg tracking-wide"
      >
        Add Task
      </button>
    </form>
  )
}

export default AddTodo