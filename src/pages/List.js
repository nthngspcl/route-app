import React, { useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const ListItem = ({ item }) => {
    return (
      <div className="list-item">
        <NavLink to={`/${item.id}`}>{item.title}</NavLink>
      </div>
    );
  };
  
  const List = () => {
    const [items, setItems] = useState([
      { id: 1, title: 'Item 1' },
      { id: 2, title: 'Item 2' },
      { id: 3, title: 'Item 3' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const inputRef = useRef(null);
  
    const handleAddItem = () => {
      const newItem = {
        id: items.length + 1,
        title: inputRef.current.value,
      };
      setItems([...items, newItem]);
      setIsModalOpen(false);
      inputRef.current.value = '';
    };
  
    return (
      <div className="list-container">
        <h1>List</h1>
        <button onClick={() => setIsModalOpen(true)}>Add Item</button>
        {items.map((item) => (
          <div key={item.id}>
            <ListItem item={item} />
          </div>
        ))}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Add Item</h2>
              <input type="text" ref={inputRef} />
              <button onClick={handleAddItem}>Add</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default List;