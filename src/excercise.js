import { createStore } from "redux";


//초기값
const initState = {
    counter :0,
    text:"",
    list:[]
}

// 액션 타입 상수 설정
// 일반적으로 상수는 대문자로 작성한다.
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_LIST = "ADD_LIST";


// 액션 생성함수 설정
// 일반적으로 액션 함수는 함수이기 때문에 소문자로 작성한다.
const increase = ()=>({type:INCREASE});
const decrease = ()=>({type:DECREASE});
const changeText = (text)=>({type:CHANGE_TEXT,text});
const addList = (item)=>({type:ADD_LIST,item});


// 리듀서 설정

function reducer(state = initState,action){
    switch(action.type){
        case INCREASE:{
            return{
                ...state,
                counter: state.counter+1
            }
        }
        case DECREASE:{
            return{
                ...state,
                counter: state.counter-1
            }
        }
        case CHANGE_TEXT:{
            return{
                ...state,
                text: action.text
            }
        }
        case ADD_LIST:{
            return{
                ...state,
                list: state.list.concat(action.item)
            }
        }
        default:{
            return state;
            // contextApi에서는 디폴트값에 thorw new Error를 발생시켯지만,
            // redux에서는 기존 상태값을 반환한다.
        }
    } 
}


// 스토어 생성

const store = createStore(reducer);


// 구독 하기

const listener =()=>{
    const state = store.getState();
    console.log(state)
}


// 구독 설정 
// 구독을 해제하려면 구독 설정한 함수를 불러들이면 된다.
const subscribe = store.subscribe(listener); 
//subscribe();


// 디스패치 설정

store.dispatch(increase());

store.dispatch(decrease());

store.dispatch(changeText("안녕하세요"));


store.dispatch(addList("h1h1"));

// 콘솔창에서 디스패치 확인하기

window.store = store ;