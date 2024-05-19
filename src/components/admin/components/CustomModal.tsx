import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface ReusableModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  body: React.ReactNode;
}

const CustomModal: React.FC<ReusableModalProps> = ({ show, handleClose, title, body }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;