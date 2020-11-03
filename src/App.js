
import React,{useState, useEffect} from 'react';
import CardList from './components/card-list/CardList';
import './App.css';
import {SearchBox} from './components/search-box/SearchBox';
const  App = (props) => {

  const [monstersState, setMonstersState] = useState({
    monsters :[]
    
  }) 

  const [searchState, setSearchState]  = useState({
    searchfield:''
     })
  useEffect(() => {
  //  console.log('alex')
 //   if(monstersState.monsters.length<1)
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users => setMonstersState({monsters:users})).catch(err => console.log(err))
   // 
   
  },[])
  
  const handleChange = (e) => {
     setSearchState({
      searchfield:e.target.value
           })}
  

  const monsters = monstersState.monsters;
  const searchfield =searchState.searchfield;
  const filteredMonsters = monsters.filter(monster =>{
    return  monster.name.toLowerCase().includes(searchfield.toLowerCase());}

    )
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' onhandlechange={handleChange}/>
      <CardList monsters={filteredMonsters}/>
      
    </div>
  );
}


export default App;
