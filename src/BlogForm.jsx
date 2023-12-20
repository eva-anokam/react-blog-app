import React from "react";

export default function BlogForm(props) {
  return (
    <form className="blogForm" onSubmit={props.addBlog}>
      <label htmlFor="postTitle">
        Post Title<span className="required">*</span>
      </label>
      <input
        type="text"
        id="postTitle"
        name="postTitle"
        onChange={props.createBlog}
        value={props.newBlog.postTitle}
        required
      />
      <label htmlFor="postCategory">
        Post Category<span className="required">*</span>
      </label>
      <select
        name="postCategory"
        id="postCategory"
        onChange={props.createBlog}
        value={props.newBlog.postCategory || ""}
        required
      >
        <option value="" disabled hidden className="default-option">
          Choose
        </option>
        <option value="Books">Books</option>
        <option value="Fiction">Fiction</option>
      </select>
      <label htmlFor="featuredImage">
        Featured Image<span className="required">*</span>
        <p className="featured-img-text">Browse Photo</p>
      </label>
      <input
        type="file"
        id="featuredImage"
        name="featuredImage"
        accept="image/*"
        onChange={props.createBlog}
      />
      <label htmlFor="postDescription">
        Post Description<span className="required">*</span>
      </label>
      <textarea
        name="postDescription"
        id="postDescription"
        cols="30"
        rows="10"
        value={props.newBlog.postDescription}
        onChange={props.createBlog}
        required
      ></textarea>

      <button className="formBtn" type="submit">
        Submit
      </button>
    </form>
  );
}
