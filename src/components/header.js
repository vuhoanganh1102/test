import React from 'react';


const Header = () => {
   
    const change = (event)=>{
        console.log(event.target.value);
    }
    return (
        <div className='text-center bg-blue-400'>
            <h1 className='text-5xl text-blue-500 font-extrabold' >logo</h1>
            <input 
                className='place-content-between bg-slate-50 border border-gray-700 p-4 m-4 rounded-xl max-w-xl'
                onChange={(e)=> change(e)}
            />
            <button
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'

            >click me</button>
           
        </div>
    );
};
export default Header;