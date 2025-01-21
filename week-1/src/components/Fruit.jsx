export default function Fruit({ fruits }) {
  const fruitKeys = Object.keys(fruits[0]);
  return (
    <table>
      <thead>
        <tr>
          {fruitKeys.map((fruitHead, index) => (
            <th key={index}>{fruitHead}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {fruits.map((fruit) => (
          <tr key={fruit.Price}>
            <td>{fruit.Name}</td>
            <td>${fruit.Price}</td>
            <td>{fruit.Emoji}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
