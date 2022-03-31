import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { getPost, getPosts } from '../modules/postModule';



function PostContainer () {

    const {post} = useSelector((state)=>({
        post:state.post.post
    }),shallowEqual);

    const dispatch = useDispatch();

    const getPostLogic = (id)=>{dispatch(getPost(id))};
    const getPostsLogic = ()=>{dispatch(getPosts())};

    return (
        <Post
            post={post}
            getPostLogic={getPostLogic}
            getPostsLogic={getPostsLogic}
        />

    );
}

export default PostContainer;    