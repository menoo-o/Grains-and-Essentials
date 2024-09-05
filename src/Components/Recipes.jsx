import React from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';
import '../App.css'; // CSS file for styling



const Recipes = () => {
  const recipes = [
    {
      imgSrc: '/recipes/dish1.webp',
      title: 'Gluten-Free Banana Bread',
      link: '#',
    },
    {
      imgSrc: '/recipes/dish2.webp',
      title: 'Lentil Lasagna',
      link: '#',
    },
    {
      imgSrc: '/recipes/dish3.webp',
      title: 'Brown rice, quinoa & chickpea salad',
      link: '#',
    },
  ];

  return (
    <div className="recipes-section">
      <div className="recipes-heading">
        <h1>RECIPE INSIPIRATION</h1>
        <NavLink to='/recipes'>
          <Button />
        </NavLink>
        
      </div>

      
      <section className="recipes">
        <div className="recipe-container">
          {recipes.map((recipe, index) => (
            <div key={index} className="article">
              <img src={recipe.imgSrc} alt="recipes" />
              <div className="recipe-descrp">
                <p className="recipe-title">{recipe.title}</p>
                <p><a href={recipe.link} className="recipe-link">Get Recipe</a></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Recipes;
