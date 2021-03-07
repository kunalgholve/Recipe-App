import React from 'react';

const Recipe=({title,calories,image,ingredients})=>{
  return(
    <div>
      <h1>{title}</h1>
      <p>calories:{calories}</p>
      <img src={image} alt='recipeimg'/>
      <ol>
      Ingredients : {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
    </div> 
  )
}
export default Recipe;