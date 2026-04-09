import React from "react";
import { useState } from "react";
import "../react-practice-hooks/Usestate.css";

function UseStateArray() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    setCounters([...counters, { id: counters.length + 1, value: 0 }]);
  };

  const incrementCounter = (id) => {
    setCounters(counters.map(c =>
         c.id === id ? {...c, value: c.value +1}:c)
  );

  };

  return (
    <>
      <button onClick={addCounter}>Add counter</button>
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            Counter {counter.id} : {counter.value}
            <button onClick={()=>incrementCounter(parseInt(counter.id))}>Increment</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UseStateArray;
