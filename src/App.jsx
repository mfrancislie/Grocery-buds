import { useState } from 'react';
import './App.css';
import Form from './Form';
import { nanoid } from 'nanoid';

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
  return (
    <section className="section-center">
      <Form addItem={addItem} />
    </section>
  );
}

export default App;
