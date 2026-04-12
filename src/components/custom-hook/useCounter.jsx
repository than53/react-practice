import React, { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(initialValue);
  return { count, incrementCount, decrementCount, resetCount };
}

export default useCounter;
