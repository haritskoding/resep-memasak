import React from 'react'
import * as uuidv8 from 'uuid';

const RecipeDetails = ({ ingredients }) => {
    return ingredients.map(ingredient => {
      return (
        <ul key={uuidv8} className="ingredient-list">
          <li className="ingredient-text">{ingredient.text}</li>
          <li className="ingredient-weight">Weight - {ingredient.weight}</li>
        </ul>
      );
    });
  };
  
export default RecipeDetails;
