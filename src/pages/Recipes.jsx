import React from 'react'
import Header from '../Components/Header'
import Grid from '../Components/GridRecipe'
import blogInfo from '../data/RecipeBlogs/RecipeBlogsInfo'


// const blogInfo = [
//   {
//   id: 1,
//   title: 'Chickpea Lentils and Cabbage Falafels',
//   imageUrl: '/recipeblogs/chickpeafalafel.webp', // Replace with actual image paths
//   },
//   
//   // Add more blog objects here as needed
//   ];


const Recipes = () => {
  return (
    <>
    {/* same div used for blogs and recipes page */}
    
    <div className='blogs-container'>
      <Header 
        heading="Recipes" 
        paragraph="Find Your Next Favorite Recipe"
      />

      <Grid blogs={blogInfo} />
      
      </div>
    </>
  )

  
}

export default Recipes
