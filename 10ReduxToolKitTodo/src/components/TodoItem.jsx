
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo, toggleTodoCompleted } from "../features/todo/todoSlice";

import { useState } from 'react'

function TodoItem({todo}) {

    const [isTodoEditable , setIsTodoEditable] = useState(false);
    const [todoMsg , setTodoMsg] = useState(todo.text)
    const dispatch = useDispatch()

    const handleEditSave = () => {
        if(isTodoEditable) {
            if(todoMsg !== todo.text) {
                dispatch(updateTodo({...todo , text: todoMsg}))
                setIsTodoEditable(false)
            }
        } else {
            setIsTodoEditable(true)
        }
    }
    const handleToggleCompleted = () => {
       
        dispatch(toggleTodoCompleted(todo.id))
    }

    const handleRemoveTodo = () => {
        dispatch(removeTodo(todo.id))
    }
  return (
    <li
      className={`
        mt-4 flex flex-col sm:flex-row justify-between items-center px-5 py-3 rounded-lg shadow-xl transform transition duration-300 ease-in-out
        ${todo.completed ? 'bg-gradient-to-r from-green-700 to-green-800 line-through opacity-80' : 'bg-gradient-to-r from-zinc-700 to-zinc-800'}
        hover:scale-[1.01] hover:shadow-2xl
      `}
    >
        <input
                type="checkbox"
                className="cursor-pointer mr-2"
                checked={todo.completed}
                onChange={handleToggleCompleted}
            />
      {isTodoEditable ? (
        <input
          type="text"
          className="bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out w-full sm:w-auto flex-grow mb-2 sm:mb-0 mr-0 sm:mr-4"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          autoFocus // Automatically focus the input when in edit mode
        />
      ) : (
        // Display the todo text, with strikethrough if completed
        <div className={`text-white text-lg flex-grow mr-4 ${todo.completed ? 'text-gray-300' : ''}`}>
          {todo.text}
        </div>
      )}

      <div className="flex items-center space-x-2">
     
        

        {/* Edit/Save Button */}
        <button
          className={`
            border-0 py-2 px-4 rounded-md text-sm font-medium transition duration-200 ease-in-out shadow-md
            ${isTodoEditable ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
          `}
          onClick={handleEditSave}
          disabled={todo.completed} // Disable edit button if todo is completed
        >
          {isTodoEditable ? '✅ ' : '✏️ '}
        </button>

        {/* Delete Button */}
        <button
          onClick={handleRemoveTodo}
          className="text-white bg-red-600 border-0 py-2 px-3 rounded-md text-sm font-medium focus:outline-none hover:bg-red-700 transition duration-200 ease-in-out shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  )
}

export default TodoItem