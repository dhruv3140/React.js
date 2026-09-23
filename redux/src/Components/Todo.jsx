import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/Todo/TodoSlice'

function Todos() {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white/90 tracking-wide drop-shadow-md">Your Tasks</h2>
          <span className="bg-white/10 text-white/80 py-1 px-4 rounded-full text-sm font-bold shadow-inner">
            {todos.length} {todos.length === 1 ? 'Task' : 'Tasks'}
          </span>
      </div>
      <ul className="list-none flex flex-col gap-4">
          {todos.map((todo) => (
            <li
              className="todo-item flex justify-between items-center px-6 py-4 rounded-xl"
              key={todo.id}
            >
              <div className='text-white text-lg font-medium drop-shadow-sm tracking-wide'>{todo.text}</div>
              <button
               onClick={() => dispatch(removeTodo(todo.id))}
                className="delete-btn p-2 rounded-xl cursor-pointer"
                title="Delete Task"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Todos