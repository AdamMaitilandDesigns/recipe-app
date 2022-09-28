import React, {useState, useEffect} from 'react';
import { Recipe } from './comp/Recipe';
import './AppStyles.css'

function App() {

  const APP_ID = '8c9135cf';
  const APP_KEY = 'aa7a882ee708c7cb45a60542e4634897';

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect( ()=>{

    const getRecipes = async () => {

      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
  
      setRecipes(data.hits);
  
    }

    getRecipes();

  }, [query]);


  const getSearch = (e) => {

   e.preventDefault();
   setQuery(search);
   setSearch('');
 
  }

  return (

    <div className='App'>

      <form className='search_form' onSubmit={getSearch}>
 
        <input className='search_bar' type='text' value={search} onChange={i=>setSearch(i.target.value)}/>
        <button className='search_button' type='submit'>search</button>

      </form>

      <div className='recipe-wrap'>

      {

         recipes.map(recipe=>(

          <Recipe 
           
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            img={recipe.recipe.image}
            key={recipe.recipe.label}
            
            />

         ))

      }

</div>

    </div>

  );
}

export default App;
