import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import {increase,decrease, setDiff, increaseAsync,decreaseAsync} from '../modules/counter';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {postGet,postsGet} from '../api/post.js';

function CounterContainer () {
    const {counter,diff} = useSelector((state)=>({
        counter:state.counter.counter,
        diff:state.counter.diff
    }),shallowEqual);

    // 


    const dispatch = useDispatch();

    postGet(2).then(console.log);

    const onIncrease = useCallback(()=>dispatch(increaseAsync()),[dispatch]);
    const onDecrease = useCallback(()=>dispatch(decreaseAsync()),[dispatch]);
    const onSetDiff = useCallback(diff=>dispatch(setDiff(diff)),[dispatch]);
    
    return (
    <Counter 
        counter={counter}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
    />
    );
}

export default CounterContainer;    