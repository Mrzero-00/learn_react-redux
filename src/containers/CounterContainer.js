import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import {increase,decrease, setDiff} from '../modules/counter';

function CounterContainer () {
    const {counter,diff} = useSelector((state)=>({
        counter:state.counter.counter,
        diff:state.counter.diff
    }))


    const dispatch = useDispatch();

    const onIncrease = ()=>dispatch(increase());
    const onDecrease = ()=>dispatch(decrease());
    const onSetDiff = diff=>dispatch(setDiff(diff));
    
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