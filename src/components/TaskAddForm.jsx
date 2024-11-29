import React, { Component } from 'react';

class TaskAddForm extends Component {
  state = { label: '' };

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onTaskAdded(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.label}
          onChange={this.onLabelChange}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default TaskAddForm;
