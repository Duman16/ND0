import React, { Component } from 'react';
import TaskAddForm from './components/TaskAddForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    tasks: [
      { label: 'Buy groceries', important: false, done: false, id: 1 },
      { label: 'Clean the house', important: false, done: false, id: 2 },
      { label: 'Finish React project', important: true, done: false, id: 3 },
    ],
    term: '', // Search term
    filter: 'all', // Filter type: 'all', 'active', 'done'
  };

  // Method to add a new task
  addTask = (label) => {
    const newTask = {
      label,
      important: false,
      done: false,
      id: Date.now(),
    };
    this.setState(({ tasks }) => ({
      tasks: [...tasks, newTask],
    }));
  };

  // Method to delete a task
  deleteTask = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== id),
    }));
  };

  // Method to edit a task
  editTask = (id, newLabel) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.id === id ? { ...task, label: newLabel } : task
      ),
    }));
  };

  // Method to filter tasks
  filterTasks = (tasks, filter) => {
    switch (filter) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter((task) => !task.done);
      case 'done':
        return tasks.filter((task) => task.done);
      default:
        return tasks;
    }
  };

  // Method to search tasks
  searchTasks = (tasks, term) => {
    if (term === '') return tasks;
    return tasks.filter((task) =>
      task.label.toLowerCase().includes(term.toLowerCase())
    );
  };

  render() {
    const { tasks, term, filter } = this.state;

    // Filter and search tasks
    const visibleTasks = this.filterTasks(
      this.searchTasks(tasks, term),
      filter
    );

    return (
      <div>
        <h1>ToDo List</h1>
        <TaskAddForm onTaskAdded={this.addTask} />
        <TodoList
          tasks={visibleTasks}
          onTaskDeleted={this.deleteTask}
          onTaskEdited={this.editTask}
        />
      </div>
    );
  }
}

export default App;
