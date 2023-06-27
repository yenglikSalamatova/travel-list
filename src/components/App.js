import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confirm = window.confirm("Вы точно хотите очистить список?");
    if (confirm) {
      setItems([]);
    }
  }

  return (
    <div className="container">
      <div className="app">
        <Logo />
        <Form onAddItem={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearItems={handleClearItems}
        />
        <Stats items={items} />
        <div className="bg"></div>
      </div>
    </div>
  );
}
