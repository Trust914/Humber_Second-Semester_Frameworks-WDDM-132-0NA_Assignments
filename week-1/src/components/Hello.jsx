const Hello = ({ person }) => {
  return (
    <div>
      <h1>
        {person.message} {person.name}
      </h1>
      <h2>
        {person.message2}
      </h2>
    </div>
  );
};

export default Hello;
