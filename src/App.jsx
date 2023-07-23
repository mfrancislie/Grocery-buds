import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './components/Items';

// eslint-disable-next-line no-unused-vars
// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem('list')));
//   } else {
//     return [];
//   }
// };

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

function App() {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };

    setItems([...items, newItem]);
    console.log('item added to the list');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    console.log('item removed');
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(items));
  }, [items]);

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
