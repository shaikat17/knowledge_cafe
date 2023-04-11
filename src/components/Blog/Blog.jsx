import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import './Blog.css'


const Blog = ({ readTime, getTitle }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("data.json");
      const data = await response.json();

      setData(data);
    };

    loadData();
  }, []);

  return (
    <div className="blog_container">
      {data.map((post) => (
        <Post
          key={post.id}
          post={post}
          readTime={readTime}
          getTitle={getTitle}
        />
      ))}
    </div>
  );
};

export default Blog