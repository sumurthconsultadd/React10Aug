import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TaskCard from "./TaskCard";
import { connect } from "react-redux";
import { addTask } from "./taskActions";

const TaskList = ({ tasks, addTask }) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if(task==="") {
        alert("Task Empty"); 
        return; 
    }
    const newTask = {
      id: tasks && tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      description: task,
    };
    console.log(newTask);
    addTask(newTask);
    setTask("");
  };

  return (
    <div>
      <div className="add-form">
        <Form onSubmit={handleTaskSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              value={task}
              onChange={handleTaskChange}
              placeholder="Enter a task"
            />
          </Form.Group>
          <Button type="submit">Add Task</Button>
        </Form>
      </div>
      <div className="task-list">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <h2>No Tasks</h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
