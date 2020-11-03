import React from 'react';
import './SearchBox.css';


 export const SearchBox = (props) => {
 return (
    <input
    className='search'
     type='search' 
      placeholder={props.placeholder}
       onChange={props.onhandlechange}
    />
 )  
}

