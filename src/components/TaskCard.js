import { Button, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useState } from "react";
import { deleteTask, modifyTask } from "./taskActions";
import { useNavigate } from "react-router";

const mapDispatchToProps = {
  deleteTask,
  modifyTask,
};

function TaskCard({ task, deleteTask, modifyTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const navigate = useNavigate();

  const handleModify = () => {
    setIsEditing(true);
  };

  const handleSubmitModify = () => {
    modifyTask(task.id, newDescription);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
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
            <Card.Text>{task.description}</Card.Text>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="secondary" onClick={handleModify}>
              Modify
            </Button>
            <Button variant="primary" onClick={() => navigate(`/${task.id}`)}>
              View
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default connect(null, mapDispatchToProps)(TaskCard);
