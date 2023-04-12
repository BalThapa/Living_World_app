import React from "react";
import "./Animals.css";
import Card from '../UI/Card';
import Search from '../UI/search';

const Animals = (props) => {
const searchFilter = props.data.filter(animal =>{
    return animal.name.includes(props.searchInput)
})

    return(
        <div>
            
            <div className="page">
                <h1>Living Beings</h1>
                <h2>Animals {searchFilter.length }</h2>
                <Search searchHandler ={props.searchHandler}/>   
            </div>
            
            <div className="collection">
                {searchFilter
                .map((item) => <Card 
                key={item.name}
                name={item.name}
                likes={item.likes} 
                removeCard={()=>props.removeHandler(item.name)}
                removeLikes={()=>props.likesHandler(item.name,'remove')}
                addLikes={()=>props.likesHandler(item.name,'add')}/>)}
            </div>
        </div>    
       
  
    );
};

export default Animals;