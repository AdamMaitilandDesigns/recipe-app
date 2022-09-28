import React from 'react';

import './recipeStyles.css'

export const Recipe = (prop) => {

 return(

    <div className='recipe'>
       
       <h2>{prop.title}</h2>
       <p>Calories: {prop.cal}</p>
       <img src={prop.img} alt=''/>
         
    </div>

 );

}