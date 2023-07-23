import { useState } from 'react';
import './App.css';

function App() {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newItemName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default App;
