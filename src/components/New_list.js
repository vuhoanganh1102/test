import React from 'react';
import NewItem from './New_item';


const NewList = ({list}) => {
    const news = list.map(
        (item) => (
            <NewItem key={item.id} item={item}/>
        )
    
    )
    return (
        <>
            {news}
        </>
        
    );
};

export default NewList;