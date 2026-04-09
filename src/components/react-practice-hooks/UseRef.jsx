import React, { useRef, useState } from "react";

function UseRef() {

    const [stateCount, setStateCount] = useState(0)
    const refCount =useRef(0)

    const inputRef = useRef(null)
    const inputNextRef = useRef(null)

    const incrementStateCount = ()=>{
        setStateCount(stateCount +1)
    }

    const incrementRefCount = ()=>{
        refCount.current +=1
        console.log(`Ref Count: ${refCount.current}`)
    }

    const focusInput = ()=>{
    //    console.log(inputRef)
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = 'yellow'
    }
       const focusInputNext = ()=>{
    //    console.log(inputRef)
        inputNextRef.current.focus()
        inputNextRef.current.style.backgroundColor = 'yellow'
    }

       const resetFocus = ()=>{
    //    console.log(inputRef)
         inputRef.current.style.backgroundColor = 'white'
        inputNextRef.current.style.backgroundColor = 'white'
    }
  return (
    <div>
      <p>State Count {stateCount}</p>
      <button onClick={incrementStateCount}>Increment State Count</button>

        <p>Ref Count {refCount.current}</p>
      <button onClick={incrementRefCount}>Increment State Count</button>

      <input ref={inputRef} type="text" placeholder="Focus me"/>
      <button onClick={focusInput}>Focus and highlight</button>

      <input ref={inputNextRef} type="text" placeholder="Focus me"/>
      <button onClick={focusInputNext}>Focus and highlight</button>

      <button onClick={resetFocus}>reset</button>
    </div>
  );
}

export default UseRef;
