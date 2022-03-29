import React from 'react';

function Counter ({onIncrease,onDecrease,onSetDiff,counter,diff}) {

    const onChangeLogic = (e)=>{
        onSetDiff(parseInt(e.target.value,10));
    }

    console.log(counter);

    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <input value={diff} onChange={onChangeLogic}></input>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;    