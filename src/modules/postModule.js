import * as postAPI from '../api/post.js';
import asyncUnit from '../lib/asyncUnit.js';

// 액션 타입 설정
const GET_POSTS_SUCCESS = "postModule/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "postModule/GET_POSTS_ERROR";

const GET_POST_SUCCESS = "postModule/GET_POST_SUCCESS";
const GET_POST_ERROR = "postModule/GET_POST_ERROR";

const GET_POSTS = "postModule/GET_POSTS";
const GET_POST = "postModule/GET_POST";

// 액션 함수 설정
export const getPosts = ()=> async dispatch=>{
    //요청 시작
    dispatch({type:GET_POSTS});

    //요청 데이터
    try{
        //await를 사용해서 api 요청 상태 기다림.
        const post = await postAPI.postsGet();

        //요청 성공시
        dispatch({
            type:GET_POSTS_SUCCESS,
            post
        });
    }
    catch (e){
        //요청 실패
        dispatch({
            type:GET_POSTS_ERROR,
            error:e
        });
    }
}

export const getPost = (id)=>async dispatch=>{
    //요청 시작
    dispatch({type:GET_POST});

    //요청 데이터
    try{
        //await를 사용해서 api 요청 상태 기다림.
        const post = await postAPI.postGet(id);

        //요청 성공시
        dispatch({
            type:GET_POST_SUCCESS,
            post
        });
    }
    catch (error){
        //요청 실패
        dispatch({
            type:GET_POST_ERROR,
            error
        });
    }
}

//리듀서 초기값
const postData = asyncUnit.initState();

export default function post(state=postData,action){
    switch(action.type){
        case GET_POST:{
            return {
                ...state,
                post:asyncUnit.loading()
            }
        }
        case GET_POSTS:{
            return {
                ...state,
                posts:asyncUnit.loading()
            }
        }
        case GET_POST_SUCCESS:{
            return {
                ...state,
                post:asyncUnit.success(action.post)
            }
        }
        case GET_POSTS_SUCCESS:{
            return {
                ...state,
                posts:asyncUnit.success(action.post)
            }
        }
        case GET_POST_ERROR:{
            return {
                ...state,
                post:asyncUnit.error(action.error)
            }
        }
        case GET_POSTS_ERROR:{
            return {
                ...state,
                posts:asyncUnit.error(action.error)
            }
        }
        default:{
            return state
        }
    }
}
