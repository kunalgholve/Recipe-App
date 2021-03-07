import './App.css';
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

function App() {
  const App_ID = "7d9a4e9a";
  const APP_KEY = "154c90ec474b27507690f1e62de4a7c6";

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');

  useEffect(() =>{ 
    getRecipes();
  }, [query]);
 
  const getRecipes = () => {
    const res = fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${APP_KEY}`
    );
    res.then((resp) => resp.json())
        .then((data) => {
        setRecipes(data.hits);
      });
  };

  const updateSearch= e=>{
    setSearch(e.target.value);
  }

  const getSearch=(e)=>
  {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {
        recipes.map((recipe,i) => (
          <Recipe key={i}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}

        />
      ))}
    </div>
    </div>
  );
}
export default App;
