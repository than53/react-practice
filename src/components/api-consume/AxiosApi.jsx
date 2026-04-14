import axios from 'axios';
import React, { useState, useEffect } from 'react'

function AxiosApi() {
    const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null)
    
      useEffect(() => {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => setData(response.data), setLoading(false))
          .catch(error => console.log(`Error: ${error}`), setError(error), setLoading(false));
      }, []);
  return (
    <div>
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
    </div>
  )
}

export default AxiosApi