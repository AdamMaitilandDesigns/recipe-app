import React, {useState, useEffect} from 'react';
import { Recipe } from './comp/Recipe';

function App() {

  const APP_ID = '8c9135cf';
  const APP_KEY = 'aa7a882ee708c7cb45a60542e4634897';

  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{

    getRecipes();

  }, []);


  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);

  }

  return (

    <div className='App'>

      <form className='search_form'>
 
        <input className='search_bar' type='text'/>
        <button className='search_button' type='submit'>search</button>

      </form>

      {

         recipes.map(recipe=>(

          <Recipe 
           
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            img={recipe.recipe.image}
            
            />

         ))

      }

    </div>

  );
}

export default App;
