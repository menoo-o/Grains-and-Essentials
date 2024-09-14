// data/Zero Waste Blogs/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogsInfo from './BlogsInfo';  // Import the blog data

const BlogPost = () => {
  const { id } = useParams(); // Get the id from the URL
  const blogId = parseInt(id); // Convert id to an integer

  // Find the blog with the matching id
  const blog = blogsInfo.find((blog) => blog.id === blogId);

  // If blog with the id is not found, show a "not found" message
  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <div className="blog-post zero-blogs-container">
      <h1 className='zero-blog-heading'>{blog.title}</h1>
      <img src={blog.imageUrl} alt={blog.title} className='zero-blog-img' />
      <p>{blog.intro}</p>
      {/* Use dangerouslySetInnerHTML to insert HTML content */}
      <div className='blog-content' dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogPost;
