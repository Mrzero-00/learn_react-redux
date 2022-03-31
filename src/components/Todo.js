import React, { useState } from 'react';

function TodoRender({item,onRemoveTodo,onDoneTodo}){
    return(
        <li>
            <span 
                style={{
                    textDecorationColor:item.done?"#ff0000":"#000",
                    textDecoration:item.done?"line-through":"none",
                }}
            onClick={()=>{onDoneTodo(item.id)}}>{item.todo}</span>
            <button onClick={()=>{onRemoveTodo(item.id)}}>X</button>
        </li>
    )
}



function Todo ({todos,onAddTodo,onRemoveTodo,onDoneTodo}) {
    const [todo,setTodo] = useState("");

    const onChangeLogic = (e)=>{
        setTodo(e.target.value);
    }
    return (
        <div>
            <ul>
                {todos.map((item)=>(<TodoRender item={item} key={item.id} onRemoveTodo={onRemoveTodo} onDoneTodo={onDoneTodo}/>))}
            </ul>
            <div>
                <input onChange={onChangeLogic} value={todo}></input>
                <button onClick={()=>{onAddTodo(todo);setTodo("")}}>+</button>
            </div>
        </div>
    );
}

export default React.memo(Todo);    