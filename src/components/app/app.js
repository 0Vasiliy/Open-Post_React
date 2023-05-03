import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


import "./app.css";

const App = () =>{
    const data = [
        {label:'Привет! Теперь я в сети!!', important:true},
        {label:'Здесь есть кто нибудь?', important:false},
        {label:'Общение происходит в монологе (.', important:false},
        {label:'Раз никого нет я ушёл.', important:false},
        {label:'Всем пока!! :)', important:false}
    ];

    return (
   <div className="app">
        <AppHeader/>, 
        <div className="search-panel d-flex">  
            <SearchPanel/> 
            <PostStatusFilter/> 
        </div> 
        <PostList posts={data}/>
        <PostAddForm/>
   </div>
    )
}

export default  App;