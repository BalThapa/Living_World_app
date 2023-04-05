import React from 'react';

const search = (props) => {
    return (
        <input onChange={props.searchHandler}/>
    );
};

export default search;