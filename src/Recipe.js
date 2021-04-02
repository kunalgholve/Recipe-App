import React from 'react';
import style from './recipe.module.css';
const Recipe=({title,calories,image,ingredients})=>{
  return(
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ol>
      Ingredients : {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <p>calories:{calories}</p>
      <img className={style.image} src={image} alt='recipeimg'/>
    </div> 
  )
}
export default Recipe;