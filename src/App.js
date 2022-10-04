import React, { useState, useCallback, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const decrementCount = useCallback(() => {
    setCount(count - 1)
  }, [count])

  const incrementCount = useCallback(() => {
    setCount(count + 1)
  }, [count])

  /*function decrementCount() {
    setCount(prevCount => prevCount - 1)
  };

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  };*/

  const sum = useMemo(() => {
    if (count === 0) { return "impossible" } else {
      return count % 2 === 0 ? "even" : "odd"
    }
  }, [count])

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <span>{sum}</span>
    </>
  )
};
export default App;