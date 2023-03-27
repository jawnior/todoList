import React, { useState } from 'react'
import './Todo.css';

function Todo() {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([]);

  const addTask = () => {
    if (!newItem) {
      alert('Enter an item.');
      return;
    };

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems(oldList => [...oldList, item]);
    setNewItem('');
  }

  const removeTask = (id) => {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div>
        <div className="card">
            <h1>To-do List</h1>

              <input
                type="text"
                className='input'
                value={newItem}
                placeholder="Add a new task"
                onChange={e => setNewItem(e.target.value)} />

              <button className="button" onClick={addTask}>Add</button>

              <ul>
                {items.map(item => {
                  return (
                    <li key={item.id}>{item.value} <button className="delete-button" onClick={() => removeTask(item.id)}>❌</button></li>
                  )
                })}
              </ul>
        </div>
    </div>
  )
}


export default Todo;