import React from "react";
import ViewBlogModal from "./ViewBlogModal";


export default function BlogItem(props) {
   const uniqueIdentifierForViewBlogModal = "uniqueViewBlogModalId";
  const [viewBlogModalIsOpen, setViewBlogModalIsOpen] = React.useState(false);
  
  function openModal() {
    setViewBlogModalIsOpen(true);
  }

  function closeModal() {
    setViewBlogModalIsOpen(false);
    
  }

  const blogItem = props.blogs.map((eachBlog, index) => {
    
    return (
      <div key={index} className="blog__item">
            <div
              onClick={() => {
                openModal();
                }}
                className="text"
            >
              <h2>{eachBlog.postTitle}</h2>
              <div className="time">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.49854 2H8.99854V1.5C8.99854 1.225 8.77354 1 8.49854 1C8.22354 1 7.99854 1.225 7.99854 1.5V2H3.99854V1.5C3.99854 1.225 3.77354 1 3.49854 1C3.22354 1 2.99854 1.225 2.99854 1.5V2H2.49854C1.94354 2 1.50354 2.45 1.50354 3L1.49854 10C1.49854 10.55 1.94354 11 2.49854 11H9.49854C10.0485 11 10.4985 10.55 10.4985 10V3C10.4985 2.45 10.0485 2 9.49854 2ZM9.49854 9.5C9.49854 9.775 9.27354 10 8.99854 10H2.99854C2.72354 10 2.49854 9.775 2.49854 9.5V4.5H9.49854V9.5ZM3.49854 5.5H4.49854V6.5H3.49854V5.5ZM5.49854 5.5H6.49854V6.5H5.49854V5.5ZM7.49854 5.5H8.49854V6.5H7.49854V5.5Z"
                    fill="#0045F6"
                  />
                </svg>
                <p>{eachBlog.time}</p>
              </div>
            </div>
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.92485 13C9.3072 13 9.61716 12.5523 9.61716 12C9.61716 11.4477 9.3072 11 8.92485 11C8.5425 11 8.23254 11.4477 8.23254 12C8.23254 12.5523 8.5425 13 8.92485 13Z"
                stroke="#9A9AB0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.92485 6C9.3072 6 9.61716 5.55228 9.61716 5C9.61716 4.44772 9.3072 4 8.92485 4C8.5425 4 8.23254 4.44772 8.23254 5C8.23254 5.55228 8.5425 6 8.92485 6Z"
                stroke="#9A9AB0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.92485 20C9.3072 20 9.61716 19.5523 9.61716 19C9.61716 18.4477 9.3072 18 8.92485 18C8.5425 18 8.23254 18.4477 8.23254 19C8.23254 19.5523 8.5425 20 8.92485 20Z"
                stroke="#9A9AB0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              </svg>
              <div className="modal">
            <ViewBlogModal
              viewBlogModalIsOpen={viewBlogModalIsOpen}
              openModal={openModal}
              closeModal={closeModal}
              uniqueIdentifier={uniqueIdentifierForViewBlogModal}
              currBlog={props.blogs[index]}
            index={index}
            setBlogs= {props.setBlogs}
            />
              </div>
      </div>
    );
  });

  return (
    <div className="blog_item_container" id="Blog_item_container">
      {blogItem}
    </div>
  );
}
