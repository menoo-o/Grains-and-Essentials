import React from 'react';
// import { NavLink } from 'react-router-dom';
import Header from '../Components/Header';
import GridBlog from '../Components/GridBlog';
import blogsInfo from '../data/Zero Waste Blogs/BlogsInfo';

const Blogs = () => {
  return (
    <div className='blogs-container'>

      <Header 
        heading="Zero-Waste Blog" 
        paragraph="Everything you need to kick start your sustainability journey!"
      />

      {/* this get */}
      <GridBlog blogs={blogsInfo} />


    </div>
  );
}

export default Blogs;