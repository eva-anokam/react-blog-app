import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "600px",
  },
};

Modal.setAppElement("#root");
export default function ViewBlogModal(props) {

  function deleteBlog(index) {
    props.setBlogs((currBlogs) => {
      return currBlogs.filter((_, currIndex) => currIndex !== index);
    });
  }

  return (
    <div>
      <Modal
        isOpen={props.viewBlogModalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        key="viewBlogModal"
        overlayClassName="overlay"
      >
        <div className="modal-btn-container">
          <button onClick={props.closeModal} className="close-modal">
            X
          </button>
        </div>
        <div className="view-post-container flow">
          <div>
            <p className="bold-title">Post Title</p>
            <h2>{props.currBlog.postTitle}</h2>
          </div>
          <div className="">
            <p className="bold-title">Featured Image</p>
            <p>{props.currBlog.featuredImage}</p>
          </div>
          <div className="">
            <p className="bold-title">Post Category</p>
            <p>{props.currBlog.postCategory}</p>
          </div>
          <div className="">
            <p className="bold-title">Post Description</p>
            <p>{props.currBlog.postDescription}</p>
          </div>
          <div className="view-post-btn-container">
            <button
              onClick={() => {
                deleteBlog(props.index);
                props.closeModal();
              }}
              className="delete__blog"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
