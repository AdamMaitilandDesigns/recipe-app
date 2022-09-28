import React from 'react';

export const Recipe = (prop) => {


 return(

    <div>
       
       <h1>{prop.title}</h1>
       <p>Calories: {prop.cal}</p>
       <img src={prop.img} alt=''/>
         
    </div>

 );

}