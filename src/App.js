
import React,{useState, useEffect} from 'react';
import CardList from './components/card-list/CardList';
import './App.css';

const  App = (props) => {

  const [monstersState, setMonstersState] = useState({
    monsters :[]
    
  }) 


  useEffect(() => {
  //  console.log('alex')
 //   if(monstersState.monsters.length<1)
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users => setMonstersState({monsters:users})).catch(err => console.log(err))
   // 
   
  },[])
  

  const allMonsters = monstersState.monsters.map(monster =>{
    return <h1 key={monster.id}>{monster.name}</h1>;
  });

  return (
    <div className="App">
      <CardList monsters={monstersState.monsters} >
      {
        allMonsters
      }
      </CardList>
  
    </div>
  );
}


export default App;
