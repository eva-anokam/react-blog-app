import React from "react";
import Modal from "react-modal";
import { getTime } from "./GenerateTime";

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
    const [edit, setEdit] = React.useState(null);
    const [initialBlog, setInitialBlog] = React.useState({
      postTitle: "",
      postCategory: "",
      featuredImage: "",
      postDescription: "",
      time: getTime(),
    });

    const [updatedBlog, setUpdatedBlog] = React.useState({
      postTitle: "",
      postCategory: "",
      featuredImage: "",
      postDescription: "",
      time: getTime(),
    });
  
function toEdit(index) {
    const BlogToEdit = props.blogs[props.index];
  setUpdatedBlog({ ...BlogToEdit });
  setEdit(props.index);
  setInitialBlog({ ...BlogToEdit });
  }
  
function updateBlog(event) {
  event.preventDefault();
  setUpdatedBlog((prevData) => {
    return {
      ...prevData,
      [event.target.name]: event.target.value,
    };
  });
}

function cancelEdit() {
  setUpdatedBlog((prevBlog) => ({
    ...prevBlog,
    ...initialBlog,
  }));
  setEdit(null);
}

function deleteBlog(index) {
  props.setBlogs((currBlogs) => {
    return currBlogs.filter((_, currIndex) => currIndex !== index);
  });
}

function updateBlogList(event, index) {
  event.preventDefault();
  props.setBlogs((prevBlogs) => {
    const newBlogList = prevBlogs.map((eachBlog, BlogIndex) => {
      if (BlogIndex === index) {
        return {
          ...updatedBlog,
        };
      }
      return eachBlog;
    });
    return newBlogList;
  });
  setEdit(null);
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
                toEdit(props.index);
                return (
                  <form action="" className="editForm">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Edit Blog name"
                      onChange={updateBlog}
                      value={updatedBlog.name}
                    />
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      value={updatedBlog.amount}
                      onChange={updateBlog}
                      placeholder="Edit Blog amount"
                    />
                    <input
                      type="text"
                      name="category"
                      id="category"
                      onChange={updateBlog}
                      value={updatedBlog.category}
                      placeholder="Edit Blog category"
                    />
                    <button onClick={(event) => updateBlogList(event, props.index)}>
                      Save edit
                    </button>
                    <button onClick={cancelEdit}>Cancel edit</button>
                  </form>
                );
              }}
              className="edit__blog"
            >
              Edit Post
            </button>
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
