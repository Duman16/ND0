import React, { useState } from 'react';

const TodoListItem = ({ label, important, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newLabel, setNewLabel] = useState(label);

  const handleEdit = () => {
    onEdit(newLabel);  // Call the edit handler
    setIsEditing(false); // Close the input field
  };

  const style = { color: important ? 'tomato' : 'black', fontWeight: important ? 'bold' : 'normal' };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <span style={style}>{label}</span>
      )}
      <button onClick={onDelete}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
};

export default TodoListItem;
