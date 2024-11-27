import React, {useState} from "react";

const TodoList = () =>{
    const[todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

        const newTodoItem = {
            id: Date.now(), // Generamos un ID único
            text: newTodo,
            completed: false
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
                   
    };

    const handleChange = (event) =>{
        setNewTodo(event.target.value);
    };

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    };

    const handleToggleComplete = (id) => {
        setTodos(
          todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
    };

    return(
        <div className="container">

            <form onSubmit={handleSubmit}>
                <input type="text" value={newTodo} onChange={handleChange} />
                <button type="submit">Agregar</button>
            </form>

            <ul>
                {todos.map(todo =>(
                    <li key={todo.id}>
                    <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                    />
                    {todo.text}
                    <button onClick={() => handleDelete(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;