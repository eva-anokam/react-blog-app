import React from "react";
import BlogList from "./BlogList";
import ModalElement from "./CreateBlogModal"
import { getTime } from "./GenerateTime";
import "./App.css";

function App() {
  const uniqueIdentifierForModalElement = "uniqueModalElementId";
  const [newBlog, setnewBlog] = React.useState({
    postTitle: "",
    postCategory: "",
    featuredImage: "",
    postDescription: "",
    time: getTime()
  });

  function createBlog(event) {
    event.preventDefault();
    if (event.target.name === "FeaturedImage") {
      const file = event.target.files[0];
      setnewBlog((prevBlogData) => {
        return {
          ...prevBlogData,
          [event.target.name]: file
        }
      })
    } else {
      setnewBlog((prevBlogData) => {
        return {
          ...prevBlogData,
          [event.target.name]: event.target.value,
        };
      });
    }
  }

  function clearInputs() {
    setnewBlog({
      postTitle: "",
      postCategory: "",
      featuredImg: "",
      postDescription: "",
    });
  }

  const [blogs, setBlogs] = React.useState(
    JSON.parse(localStorage.getItem("blogs")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);


  function addBlog(event) {
    event.preventDefault();
      setBlogs((prevBlogs) => {
        return [...prevBlogs, newBlog];
      });
      clearInputs();
      closeModal()
  }
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <main className="main flow">
      <ModalElement
        newBlog={newBlog}
        createBlog={createBlog}
        addBlog={addBlog}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        uniqueIdentifier={uniqueIdentifierForModalElement}
      />
      <BlogList blogs={blogs} setBlogs={setBlogs} />
    </main>
  );
}

export default App;
