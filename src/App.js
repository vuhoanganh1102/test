import React from 'react';


import Header from './components/header';
import NewList from './components/New_list';


import './input.css';
import JSON from './db.json';


const App = () => {
    const list= JSON;
    console.log(list)
    return (
        <div>
            <Header />
            <NewList list={list}/>
        </div>
    );
};

export default App;