import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ userName: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome ${name.userName} You are now logged in.`);
    setName({ userName: "", password: "" });
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">username: </label>
        <input
          onChange={(e) => setName({ ...name, userName: e.target.value })}
          type="text"
          id="username"
          value={name.userName}
          required
        />
        <br />
        <br />
        <label htmlFor="password">password: </label>
        <input
          onChange={(e) => setName({ ...name, password: e.target.value })}
          type="password"
          id="password"
          value={name.password}
          required
        />
        <br />
        <br />
        {/* <button onClick={(e) => handleSubmit(e)}> Login </button> */}
        <input type="submit"  id="submit" value="Submit"/>
      </form>
    </div>
  );
}
