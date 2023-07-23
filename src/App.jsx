import { useState } from 'react';
import './App.css';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './components/Items';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };

    setItems([...items, newItem]);
    console.log('item added to the list');
  };

  const removeItem = (itemId) => {};
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
