// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";

function App() {
  const person = {
    name: "Trust.",
    message: "Hello , ",
    message2: "Welcome Aboard",
  };

  return (
    <div>
      <Hello person={person} />
      <Fruits />
    </div>
  );
}

export default App;
