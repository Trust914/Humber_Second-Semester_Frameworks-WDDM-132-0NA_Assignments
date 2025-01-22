/* eslint-disable react/prop-types */
export default function Fruit({ fruitObj }) {
  return (
    <tr>
      <td>{fruitObj.Name}</td>
      <td>${fruitObj.Price}</td>
      <td>{fruitObj.Emoji}</td>
      <td>{fruitObj.soldOut ? "Sold Out" : "In stock"}</td>
    </tr>
  );
}
