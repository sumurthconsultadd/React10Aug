import { Button, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useState } from "react";
import { deleteTask, modifyTask } from "./taskActions";
import { useNavigate, useParams } from "react-router";


function DetailedTaskView({ tasks, deleteTask, modifyTask }) {
  const taskId = useParams();
  const id = taskId.id; 

  const task = taskId && tasks?.find((task) => task.id === parseInt(id, 10));
  console.log('task is ', task);


  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task?.description);
  const navigate = useNavigate();

  const handleModify = () => {
    setIsEditing(true);
  };

  const handleSubmitModify = () => {
    modifyTask(task?.id, newDescription);
    setIsEditing(false);
  };

  const handleDelete = () => {
    task && deleteTask(task?.id);
    navigate(`/`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {isEditing ? (
          <Form.Group>
            <Form.Control
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <Button variant="primary" onClick={handleSubmitModify}>
              Submit
            </Button>
          </Form.Group>
        ) : (
          <div>
            <Card.Text>{task?.description}</Card.Text>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="secondary" onClick={handleModify}>
              Modify
            </Button>
          </div>
        )}
        <Button variant="primary" onClick={() => navigate(`/`)}>
          Go to Home
        </Button>
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  deleteTask,
  modifyTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedTaskView);
