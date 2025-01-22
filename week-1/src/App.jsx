// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import Count from "./components/Counter";
import Form from "./components/Form";
import BreakPoint from "./components/BreakPoint";

function App() {
  const people = [
    { name: "Trust.", message: "Hello , " },
    { name: "Boye.", message: "Welcome , " },
    { name: "Emmanuel.", message: "Thank you , " },
    { name: "Danilo.", message: "Hi 👋, " },
  ];

  return (
    <div>
      <Hello person={people} />
      <BreakPoint/>
      <Fruits />
      <BreakPoint/>
      <Count />
      <BreakPoint/>
      <Form />
      <BreakPoint/>
    </div>
  );
}

export default App;
