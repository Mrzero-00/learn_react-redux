## React - redux 학습

#### 시작 : 2022.03.28

#### 목표 기한 : 2022.03.29

#### react-typescript 학습중 redux기능을 사용한지 오래되어서 다시 복기 하는 느낌으로 학습!

#### 목표 : redux 기본 기능과 리덕스 미들웨어 까지 학습하고 다시 react-typescript 학습 하러 가자!

#### 학습:

##### 1. 리덕스를 사용할 때는 3가지 주의점이 있다.

> 1.  하나의 애플리케이션에는 1개의 스토어만 가지고 있어야한다.
> 2.  상태는 읽기 전용이다. (상태의 불변성을 지켜주기 위하여)
> 3.  변화를 일으키는 함수 리듀서는 순수 함수 여야한다.

##### 2. 리덕스에서 스토어를 한개만 만드는데 리듀서는 몇개 만들수 있음

> 리듀서를 몇개 만들고 이것을 루트 리듀서로 묶어서 하나의 스토어로 만들어서 관리 할 수있다.
> 리액트와 같이 사용하기 위해서는 redux는 물론 react-redux를 npm 을 통해 설치 해주어야함.

##### 3. 기본적인 리덕스 코드

<pre><code>
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

</code></pre>

##### 4. 리덕스는 액션함수와 리듀스, 초기 데이터 등 파일을 나눌 수도있지만, Ducks패턴을 활용하여 한파일에 모두 정리하여 사용 할 수도 있음.

##### 5. Ducks 패턴을 활용 한 코드

src/modules/counter.js

<pre><code>
// 액션타입 설정
// Ducks 패턴은 리덕스의 액션함수와 리듀스등을 따로 나누지 않고 한군데 모아놓는것을 말한다.
// Ducks 패턴에서는 다른 모듈과 이름이 겹칠수도 있어서 액션타입 설정시 
// 접두사처럼 모듈 이름을 적어준다.

const SET_DIFF = "counter/SET_DIFF";
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


// 액션 함수 설정 
// 액션 함수는 외부에서 가져가서 써야하기때문에 export해준다.
// 일반적으로 리듀서는 export default로 내보내고 액션함수는 export로 내보낸다.
export const setDiff = (diff)=> ({type:SET_DIFF,diff});
export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DECREASE});


// 초기값 설정

const initState ={
    diff:1,
    counter:0
}


// 리듀서 설정
// export default로 설정해주는것이 일반적임.

export default function counter(state =initState,action){
    switch(action.type){
        case SET_DIFF:{
            return{
                ...state,
                diff:action.diff
            }
        }
        case INCREASE:{
            return{
                ...state,
                counter:state.counter +state.diff
            }
        }
        case DECREASE:{
            return{
                ...state,
                counter:state.counter - state.diff
            }
        }
        default:{
            return state
        }
    }
}
</code></pre>

##### 6. 리덕스는 1개의 스토어만 가지고 있지만, 리듀스를 통해 여러가지의 상태를 나누어서 담을 수 있다. 이때 사용되는 것이 루트리듀서이다.

src/modules/root.js

<pre><code>
    import { combineReducers } from "redux";
    import counter from "./counter";
    import todos from "./todos";


    const rootReducer = combineReducers({
        counter,
        todos
    })

    export default rootReducer;
</code></pre>

##### 7. 이제 리덕스를 react에 적용하기 위해서는 store를 생성하고 이를 리액트의 최상위 노드에 적용 시켜주면됨.

src/index.js

<pre><code>
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './modules/root';

const store = createStore(rootReducer);
console.log(store.getState());
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
,
  document.getElementById('root')
);

</code></pre>

##### 8. 리덕스에서는 디렉토리를 3개정도 생각하면 된다.(필수요소는 아님)

> 1. reducer와 액션함수, 초기값을 저장하는 module 디렉토리
> 2. view를 담당하는 components 디렉토리
> 3. module과 view를 이어주는 containers 디렉토리
