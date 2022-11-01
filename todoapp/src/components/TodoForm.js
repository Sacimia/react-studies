import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props){
    //Crei duas constantes que será usada como input para o forms
    const [input, setInput] = useState(props.edit ? props.edit.value:'');
    
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    });

    //Possivelmente dando um valor atribuido e depois trocar de valor
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
 
    return(
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                 <input 
                    placeholder='Atualizar seu item'
                    value={input} 
                    onChange={handleChange}
                    name="text"
                    ref={inputRef}
                    className='todo-input edit'
                  />
                  <button type="" onClick={handleSubmit} className="todo-button edit">
                    Atualizar
                  </button>
                </>
            ): (
                <>
                 <input
                    placeholder='Adicona uma tarefa' 
                    value={input} 
                    onChange={handleChange} 
                    name='text' 
                    className='todo-input' 
                    ref={inputRef}
                  />
                  <button onClick={handleSubmit} className='todo-button'>
                    Adiciona uma tarefa
                  </button>
                  </>
                )}
        </form>
    );
}

export default TodoForm;
