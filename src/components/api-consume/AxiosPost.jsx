import React, { useState } from "react";
import api from "./api/api";

function AxiosPost() {
  const [data, setData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { title: "foo", body: "bar", userId: 1 };

    api
      .post("/posts", newPost)
      .then((response) => {
        console.log(response)
        console.log("New Post Added", response);
        setData([response]);
      });
  };
  return (
    <div>
      <h1>Axios Post</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AxiosPost;
