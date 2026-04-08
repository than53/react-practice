import React from 'react'
import {useState} from 'react'


function UseStatePractice() {

    const [count, setCount] = useState(0); 

    const incrementCount=()=>{
        setCount(count +1);
    }
     const decrementCount=()=>{
        setCount(count -1);
    }

  return (
    <div>
        <h1>Counter value : {count}</h1>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default UseStatePractice