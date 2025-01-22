import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count <= 0 ? 0 : count - 1);
  };
  return (
    <div>
      <h1> Count value is : {count}</h1>
      <button onClick={handleIncrement}>Increase Count</button>
      <button onClick={handleDecrement}>Decrease Count</button>
    </div>
  );
}
