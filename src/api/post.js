const posts = [
    {
        id:0,
        title:"자바스크립트",
        body:"자바스크립트 몸통"
    },
    {
        id:1,
        title:"타입스크립트",
        body:"타입스크립트 몸통"
    },
    {
        id:2,
        title:"리액트",
        body:"리액트 몸통"
    },
    {
        id:3,
        title:"리덕스",
        body:"리덕스 몸통"
    },
]

const sleep = ms => new Promise(resolve=>setTimeout(resolve,ms));

export async function postsGet(){
    await sleep(1000);
    return posts
}


export async function postGet(id){
    await sleep(1000);
    return posts.find((post)=>post.id === id);
}


//async 로 만들어진 함수는 리턴이 new Promise를 하지않아도 프로미스를 반환한다.
