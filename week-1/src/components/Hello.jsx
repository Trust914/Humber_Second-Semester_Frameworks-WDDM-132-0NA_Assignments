import { useState } from "react";

/* eslint-disable react/prop-types */
const Hello = ({ person }) => {
  const [personIndex, setPersonIndex] = useState(0);
  function handleChangePerson() {
    setPersonIndex((prevIndex) =>
      prevIndex === person.length - 1 ? 0 : prevIndex + 1
    );
  }
  return (
    <div>
      <h1>
        {person.length > 0 
          ? `${person[personIndex].message} ${person[personIndex].name}`
          : "No person to show!"}
      </h1>
      <button onClick={handleChangePerson}>Change Person</button>
    </div>
  );
};

export default Hello;
