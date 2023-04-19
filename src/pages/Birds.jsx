import React from 'react';
import Card from '../UI/Cards/Card';
import Search from '../UI/search';
import "../index.css";


const Birds = (props) => {
const searchFilter = props.data.filter(birds =>{
    return birds.name.includes(props.searchInput)
})
    return (
        <div>
            <div className="page">
                <h1>Living Beings</h1>
                <h2>Birds {searchFilter.length}</h2>
                <Search searchHandler = {props.searchHandler}/>
            </div>

            <div className='collection'>
                {searchFilter.map((item)=> <Card key={item.name}
                name = {item.name}
                likes = {item.likes}
                removeCard={()=>props.removeHandler(item.name)}
                removeLikes={()=>props.likesHandler(item.name,'remove')} 
                addLikes={()=>props.likesHandler(item.name,'add')}/>)}
               
            </div>
        </div>
    );
};

export default Birds;