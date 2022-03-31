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


// thunk 미들웨어를 활용 하기 위한 함수

export const increaseAsync = ()=> (dispatch) =>{
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
}

export const decreaseAsync = ()=> (dispatch) =>{
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
}



// 초기값 설정

const initState ={
    diff:1,
    counter:5
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
                counter:state.counter + state.diff
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