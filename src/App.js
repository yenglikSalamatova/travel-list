import { useState } from "react";

const initialItems = [
  { id: 1, description: "Паспорта", quantity: 2, packed: false },
  { id: 2, description: "Носков", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="container">
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </div>
  );
}

function Logo() {
  return <h1>🌴Список для путешествии</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Что вам нужно для вашего путешествия? 😍</h3>
      <div className="form-input">
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Введите нужные вещи"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>У вас Х вещей в вашем списке, и вы уже упаковали Х</em>{" "}
    </footer>
  );
}
