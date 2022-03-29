import React, { useState } from 'react';

const TodoRender = React.momo(function TodoRender({item,onRemoveTodo,onDoneTodo}){
    return(
        <div>
            <div 
                style={{
                    textDecoration:item.done?"underline":"none"
                }}
            onClick={()=>{onDoneTodo(item.id)}}>{item.todo}</div>
            <button onClick={()=>{onRemoveTodo(item.id)}}>X</button>
        </div>
    )
})



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