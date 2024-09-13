// BlogGrid.js
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../App.css';

// Helper function to generate slug from the title
const slugify = (title) => {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''); // Removes special characters
};

const GridBlog = ({ blogs }) => {
  return (
    <div className='blog-grid'>
      {blogs.map(blog => (
        <NavLink 
          key={blog.id}
          to={`/blogs/${slugify(blog.title)}`} // URL with the slugified title
          className='blog-card'
        >
          <img src={blog.imageUrl} alt={blog.title} className='blog-image' />
          <h3 className='blog-title'>{blog.title}</h3>
        </NavLink>
      ))}
    </div>
  );
};

GridBlog.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default GridBlog;
