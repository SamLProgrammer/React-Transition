import { useState } from "react"

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const handleAddClick = () => {
    setCounter((counter) => ({ ...counter, counter1: counter.counter1 + 1 }));
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter.counter1}</h2>
      <h2>{counter.counter2}</h2>
      <h2>{counter.counter3}</h2>
      <hr></hr>
      <button onClick={handleAddClick}>+1</button>
    </>
  )
}
