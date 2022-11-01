import { React, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList (){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    //Atualizar todo
    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    
    //Criando uma const para remover um todo
    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    //Se completar uma id marca
    const completeTodo = id=>{
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete == !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return(
        <>
          <h1>What's the Plan for Today?</h1>
          <TodoForm onSubmit={addTodo} />
          <Todo
             todos={todos}
             completeTodo={completeTodo}
             removeTodo={removeTodo}
             updateTodo={updateTodo}
           />
        </>
    );
}

export default TodoList;