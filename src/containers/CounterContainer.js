import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import {increase,decrease, setDiff} from '../modules/counter';

function CounterContainer () {
    const {counter,diff} = useSelector((state)=>({
        counter:state.counter.counter,
        diff:state.counter.diff
    }),shallowEqual);

    // 


    const dispatch = useDispatch();

    const onIncrease = useCallback(()=>dispatch(increase()),[dispatch]);
    const onDecrease = useCallback(()=>dispatch(decrease()),[dispatch]);
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