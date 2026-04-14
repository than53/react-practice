import axios from "axios";
import React, { useState } from "react";

function AxiosPost() {

    const [data, setData] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPost = { title: "foo", body: "bar", userId: 1 };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        console.log("New Post Added", response.data);
        setData(response.data)
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
