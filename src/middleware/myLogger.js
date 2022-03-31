const myLogger = store => next => action=>{
    console.log(action);
    console.log(store.getState());
    const result = next(action);
    // console.log("current:",store.getState());
    return result;
}

// function myLogger(store){
//     return function (next){
//         return function (action){
//             console.log(action);
//             console.log(store.getState());
//             const result = next(action);
//             // console.log("current:",store.getState());
//             return result;
//         }
//     }
// }


export default myLogger;