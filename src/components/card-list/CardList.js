import React from 'react';
import './CardList.css';

 const CardList = (props) => {

   console.log(props)
    return (
    <div className='card-list'>
       
   {    props.monsters.map(monster =>{
    return <h1 key={monster.id}>{monster.name}</h1>;
  })}

        </div>
    )
}


export default CardList;