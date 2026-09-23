import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "to do message",
            completed:false,
        }
    ], 
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleTodo: (id) => {},
    
})
export const TodoProvider = TodoContext.Provider;
export const useTodo = ()=> useContext(TodoContext);
