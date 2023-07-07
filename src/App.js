import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setstep] = useState(1);
  const date = new Date();
  // console.log(date);
  date.setDate((date.getDate() + counter) * step);
  function addCounter() {
    setCounter((s) => s + 1);
  }
  function subCounter() {
    setCounter((s) => s - 1);
  }
  function addStep() {
    setstep((s) => s + 1);
  }
  function subStep() {
    setstep((s) => s - 1);
  }
  return (
    <div>
      <div>
        <button onClick={subStep}>-</button>
        step: {step}
        <button onClick={addStep}>+</button>
      </div>
      <div>
        <button onClick={subCounter}>-</button>
        Count : {counter}
        <button onClick={addCounter}>+</button>
      </div>
      <p>
        {counter} Day from today is : {date.toDateString()}
      </p>
    </div>
  );
}
