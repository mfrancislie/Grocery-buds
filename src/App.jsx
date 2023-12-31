import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './components/Items';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    toast.success('item added to the list');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success('item removed');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id == itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    toast.success('item removed');
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(items));
  }, [items]);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
