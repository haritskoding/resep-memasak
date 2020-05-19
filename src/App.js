import React,{useState} from 'react'
import Axios from 'axios';
import * as uuidv8 from 'uuid'
import './App.css'
import Recipe from './components/Recipe'

const App = () => {
    const[query,setQuery] = useState("");
    const [recipes,setRecipes] = useState([]);

    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async ()=>{
        const result =  await Axios.get(url);
        setRecipes(result.data.hits)
        console.log("ini hasil"+result) 
        setQuery("");
    }

    const onChange =(e)=>{
     setQuery(e.target.value)
    }

    const onSubmit= e=>{
        e.preventDefault();
        getData();
    }

    return (
        <div className="App">
            <h1 onClick={getData}>Food Searching App</h1>
            <form className="search-form" onSubmit={onSubmit}>
              
                <input 
                type="text" 
                placeholder="Search Food" 
                onChange={onChange}
                autoComplete="off"
                value={query}
                />
                <input type="submit" onClick={onSubmit} value="search"/>
               
            </form>
           <div className='recipes'>
               {recipes !==[] && 
               recipes.map(recipe=><Recipe key={uuidv8} recipe={recipe}/>)}
           </div>
        </div>
    )
}

export default App
