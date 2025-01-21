import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Banana", "Cashew", "Durian", "Mango"];

  const fruits = [
    { Name: "Apple", Price: 10, Emoji: "🍎" },
    { Name: "Banana", Price: 8, Emoji: "🍌" },
    { Name: "Coconut", Price: 6, Emoji: "🥥" },
    { Name: "Pineapple", Price: 4, Emoji: "🍍" },
    { Name: "Mango", Price: 2, Emoji: "🥭" },
  ];
  return (
    <div>
      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit.Price}>{fruit}</li>
        ))}
      </ul> */}
      <Fruit fruits={fruits}/>
    </div>
  );
}
