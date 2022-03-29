import React,{useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../components/Todo';
import { addTodo, doneTodo, removeTodo } from '../modules/todos';

function TodoContainer () {

    const todos = useSelector((state)=>(state.todos.todos));

    const dispatch =useDispatch();

    const onAddTodo = useCallback((todo)=>dispatch(addTodo(todo)),[dispatch]);
    const onRemoveTodo = useCallback((id)=>dispatch(removeTodo(id)),[dispatch]);
    const onDoneTodo =useCallback((id)=>(dispatch(doneTodo(id))),[dispatch])

    return (
        <Todo
        todos={todos}
        onAddTodo={onAddTodo}
        onRemoveTodo={onRemoveTodo}
        onDoneTodo={onDoneTodo}
        />
    );
}

export default TodoContainer;    