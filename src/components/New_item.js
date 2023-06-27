import React from 'react';

const NewItem = ({item}) => {
    return (
        <div className='border-b-2 border-blue-500 p-10'> 
            <h2 className='font-medium text-3xl text-blue-700 font-semibold pb-4'>{item.title}</h2>
            <div className='text-black font-medium'>{item.feed}</div>
        </div>
    );
};

export default NewItem;