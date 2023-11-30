import { Button, Modal } from "react-bootstrap";

const CourseConfirmModal = ({ show, handleClose, onAgree }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Cource</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={onAgree}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseConfirmModal;
