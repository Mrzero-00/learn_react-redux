import React from 'react';

const PostRender = ({item})=>{
    console.log(typeof(item));
    return(
        <>
            {/* <div>{item.title}</div>
            <div>{item.body}</div> */}
        </>
    )
}

function Post ({post, getPostLogic, getPostsLogic}) {
    console.log(post);
    return (
        <div>
            <button onClick={()=>{getPostLogic(1)}}>getPost</button>
            <button onClick={getPostsLogic}>getPosts</button>
            <PostRender item={post}/>
        </div>
    );
}

export default Post;    