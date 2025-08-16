
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'


function Todos() {
   

        const todos = useSelector(state => state.todos)
        
 
  return (
    <ul className="list-none space-y-4 w-full">
      {todos.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No todos yet! Add some above.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </ul>
  )
}

export default Todos