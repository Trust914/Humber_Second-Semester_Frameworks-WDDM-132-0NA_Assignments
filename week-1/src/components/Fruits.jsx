import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Banana", "Cashew", "Durian", "Mango"];

  const fruits = [
    { Name: "Apple", Price: 10, Emoji: "🍎", soldOut: false },
    { Name: "Mango", Price: 2, Emoji: "🥭", soldOut: true },
    { Name: "Banana", Price: 8, Emoji: "🍌", soldOut: false },
    { Name: "Coconut", Price: 6, Emoji: "🥥", soldOut: false },
    { Name: "Pineapple", Price: 4, Emoji: "🍍", soldOut: true },
  ];
  const fruitKeys = Object.keys(fruits[0]);

  return (
    <div>
      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit.Price}>{fruit}</li>
        ))}
      </ul> */}
      <table>
        <thead>
          <tr>
            {fruitKeys.map((fruitHead, index) => (
              <th key={index}>
                {fruitHead === "soldOut" ? "Availability" : fruitHead}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {fruits.map((fruit) => (
            <Fruit key={fruit.Price} fruitObj={fruit} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
