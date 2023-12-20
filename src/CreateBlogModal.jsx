import React from "react";
import Modal from "react-modal";
import BlogForm from "./BlogForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "600px"
  },
};

Modal.setAppElement("#root");

export default function ModalElement(props) {
  return (
    <div>
      <div className="modal-btn-container">
        <button onClick={props.openModal} className="open-modal">
          New Post
        </button>
      </div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        key="addBlogModal"
        overlayClassName="overlay"
      >
        <div className="modal-btn-container">
          <button onClick={props.closeModal} className="close-modal">
            X
          </button>
        </div>
        <BlogForm
          newBlog={props.newBlog}
          createBlog={props.createBlog}
          addBlog={props.addBlog}
        />
      </Modal>
    </div>
  );
}


