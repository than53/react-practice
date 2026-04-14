import React, { useEffect, useState } from "react";

function ApiConsume() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json), setLoading(false))
      .catch(error => console.log(`Error: ${error}`), setError(error), setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading......</p>;
  }
  return (
    <div>
      <h2>Api Consume</h2>

      {/* <p>User ID: {data.userId}</p>
          <p>Todo ID: {data.id}</p>
          <p>Todo Title{data.title}</p> */}

      {data.map((post) => (
        <ul>
          <li>{post.id}</li>
          <li>
            <strong>{post.title}</strong>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ApiConsume;
