import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, NavLink } from 'react-router-dom';
import recipes from '../data/Blogs';

const RecipeDetail = () => {
  const { id, slug } = useParams(); // Get both id and slug from URL
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === parseInt(id)); // Use id for comparison

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

   // Validate the slug
   const expectedSlug = recipe.title.toLowerCase().replace(/ /g, '-');
   if (slug !== expectedSlug) {
     // Redirect to the correct URL
     navigate(`/recipes/${recipe.id}/${expectedSlug}`, { replace: true });
   }

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p>{recipe.intro}</p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
             {ingredient.text}
            {ingredient.link ? (
              <NavLink to={ingredient.link.url} className="ingredient-link">
                {ingredient.link.label}
              </NavLink>
            ) : null}
            </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      {recipe.instructions.map((instruction, index) => (
        <div key={index}>
          <h3>{instruction.title}</h3>
          <p>{instruction.description}</p>
        </div>
      ))}

      <h2>Tips and Variations</h2>
      <ul>
        {recipe.tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
