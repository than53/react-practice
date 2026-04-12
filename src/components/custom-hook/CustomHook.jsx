import useCounter from './useCounter';

function CustomHook() {

    const {count, incrementCount , decrementCount,resetCount}  = useCounter(0);
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default CustomHook