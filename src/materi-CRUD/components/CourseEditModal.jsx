import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CourseEditModal = ({ show, handleClose, handleSubmit, data }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitData = () => {
    const submitPayload = {
        id: data.id,
        title,
        description
    }

    console.log('submit', submitPayload);
    handleSubmit(submitPayload)
  }

  useEffect(()=> {
    setTitle(data.title)
    setDescription(data.description)
  }, [data])

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Cource</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="course title"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={description}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitData}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseEditModal;
