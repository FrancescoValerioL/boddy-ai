import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Button } from "react-bootstrap";
interface ShowModal {
  handleShow(): void;
}

const BuddyBotModal = forwardRef<ShowModal, {}>((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleShow,
  }));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal size="lg" bg={"dark"} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>placeholder</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
export default BuddyBotModal;

interface Props {
  name: string;
}
