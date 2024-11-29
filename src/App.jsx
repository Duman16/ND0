import React, { Component } from 'react';
import TaskAddForm from './components/TaskAddForm';
import TodoList from './components/TodoList';
import './styles/styles.css';  // РЈР±РµРґРёС‚РµСЃСЊ, С‡С‚Рѕ РїСѓС‚СЊ РїСЂР°РІРёР»СЊРЅС‹Р№

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
      case 'active':
        return tasks.filter((task) => !task.done);
      case 'done':
        return tasks.filter((task) => task.done);
      case 'all':
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

  // Handle search input change
  onSearchChange = (e) => {
    this.setState({ term: e.target.value });
  };

  // Handle filter change
  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { tasks, term, filter } = this.state;

    // Filter and search tasks
    const visibleTasks = this.filterTasks(
      this.searchTasks(tasks, term),
      filter
    );

    return (
      <div className="todo-app">
        <h1 className="todo-app__header">ToDo List</h1>

        {/* Search input */}
        <div className="todo-app__search">
          <input
            type="text"
            className="search-input"
            placeholder="Search tasks"
            value={term}
            onChange={this.onSearchChange}
          />
        </div>

        {/* Filter buttons */}
        <div className="filter-buttons">
          <button onClick={() => this.onFilterChange('all')}>All</button>
          <button onClick={() => this.onFilterChange('active')}>Active</button>
          <button onClick={() => this.onFilterChange('done')}>Done</button>
        </div>

        {/* Add Task Form */}
        <div className="todo-app__add-form">
          <TaskAddForm onTaskAdded={this.addTask} />
        </div>

        {/* Task List */}
        <div className="todo-app__task-list">
          <TodoList
            tasks={visibleTasks}
            onTaskDeleted={this.deleteTask}
            onTaskEdited={this.editTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
