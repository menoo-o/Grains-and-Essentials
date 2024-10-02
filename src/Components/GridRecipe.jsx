// BlogGrid.js
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../App.css';
import ImageLoader from './ImageLoader';

// Helper function to generate slug from the title
const slugify = (title) => {
  return title.toLowerCase().replace(/ /g, '-');
};

const Grid = ({ blogs }) => {
  return (
    <div className='blog-grid'>
      {blogs.map(blog => (
        <NavLink 
          key={blog.id}
          to={`/recipes/${blog.id}/${slugify(blog.title)}`} // URL with id and slug
          className='blog-card'
        >
          <ImageLoader src={blog.imageUrl} alt={blog.title} className='blog-image' />
          <h3 className='blog-title'>{blog.title}</h3>
        </NavLink>
      ))}
    </div>
  );
};

Grid.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Grid;
