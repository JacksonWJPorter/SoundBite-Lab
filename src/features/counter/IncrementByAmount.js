import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from './counterSlice'
//import styles from './Counter.module.css'
export default function Counter() {
    const count = useSelector((state) =>
    state.counter.value)
    const dispatch = useDispatch()

    const [currentValue, setCurrentValue] = React.useState(0)



    return (
        <div>
            <div>
                <span>{count}</span>
                <input name="fname"
                type="number"
                value={currentValue}
                onChange={(event) => setCurrentValue(event.target.value)}/>
                <button
                aria-label="Decrement value"
                onClick={() => dispatch(incrementByAmount(Number(currentValue)))}
                >
                Increment By Amount
                </button>
            </div>
        </div>
    )
}