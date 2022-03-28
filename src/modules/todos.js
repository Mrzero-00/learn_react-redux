// 액션타입
const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = 'todos/REMOVE_TODO';

// 액션함수
let nextId = 1;
export const addTodo = (item)=>({
    type:ADD_TODO,
    todo:{
        id:nextId++,
        item
    }
});
export const removeTodo =(item) =>({type:REMOVE_TODO,item})
// 초기값
const initState = {
    todos:[]
}


// 리듀서

export default function todos(state=initState,action){
    switch(action.type){
        case ADD_TODO:{
            return{
                ...state,
                todos:state.todos.concat(action.todo)
            }
        }
        case REMOVE_TODO:{
            return{
                ...state,
                todos:state.todos.filter(item=>(item.id!==action.item.id))
            }
        }
        default:{
            return state;
        }
    }
}