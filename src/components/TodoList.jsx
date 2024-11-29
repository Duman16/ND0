import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ tasks, onTaskDeleted, onTaskEdited }) => {
  const elements = tasks.map((item) => (
    <li key={item.id}>
      <TodoListItem
        {...item}
        onDelete={() => onTaskDeleted(item.id)}
        onEdit={(newLabel) => onTaskEdited(item.id, newLabel)}
      />
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default TodoList;
