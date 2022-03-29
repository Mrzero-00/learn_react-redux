// 액션타입
const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = 'todos/REMOVE_TODO';
const DON_TODO =  'todos/DON_TODO';

// 액션함수
let nextId = 1;
export const addTodo = (item)=>({
    type:ADD_TODO,
    addTodo:{
        id:nextId++,
        todo:item,
        done:false
    }
});
export const removeTodo =(id) =>({type:REMOVE_TODO,id});
export const doneTodo = (id)=>({type:DON_TODO,id});

// 초기값
const initState = {
    todos:[
        {
            id:0,
            todo:"Study",
            done:false
        }
    ]
}




// 리듀서

export default function todos(state=initState,action){
    switch(action.type){
        case ADD_TODO:{
            return{
                ...state,
                todos:state.todos.concat(action.addTodo)
            }
        }
        case REMOVE_TODO:{
            return{
                ...state,
                todos:state.todos.filter(item=>(item.id!==action.id))
            }
        }
        case DON_TODO:{
            return{
                ...state,
                todos:state.todos.map(item=>(item.id===action.id?
                    {
                        ...item,
                        done:!item.done
                    }:
                    item))
            }
        }
        default:{
            return state;
        }
    }
}