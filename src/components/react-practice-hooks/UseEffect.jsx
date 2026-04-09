import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//     console.log(`Use Effect Trigger`);
//   }, [count]);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//     console.log(`Use Effect Trigger`);
//   });

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`Use Effect Trigger`);
  }, []);
  return (
    <div>
      <h1>Use Effect</h1>
      <button onClick={()=> setCount(count +1)}>Increment</button>
      <button onClick={()=> setValue1(value1 +1)}>Increment</button>
      <button onClick={()=> setValue2(value2 +1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
