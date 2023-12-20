import React from "react";
import BlogItem from "./BlogItem";

export default function BlogList(props) {
  return <BlogItem blogs={props.blogs} setBlogs={props.setBlogs} />;
}
