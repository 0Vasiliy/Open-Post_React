import React,{Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


import "./app.css";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label:'Привет! Теперь я в сети!!', important:true},
                {label:'Здесь есть кто нибудь?', important:false},
                {label:'Общение происходит в монологе (.', important:false},
                {label:'Раз никого нет я ушёл.', important:false},
                {label:'Всем пока!! :)', important:false}
            ]
        };
        this.deletItem = this.deletItem.bind(this);
    }
    
    deletItem(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
           
            const befor = data.slice(0, index);
            const after = data.slice(index +1);

            const newArr = [...befor, ...after];
            return{
                data: newArr
            }
        });
    }

   render(){
    return (
        <div className="app">
             <AppHeader/>, 
             <div className="search-panel d-flex">  
                 <SearchPanel/> 
                 <PostStatusFilter/> 
             </div> 
             <PostList 
             posts={this.state.data}
             onDelete={this.deletItem}
             />
             <PostAddForm/>
        </div>
         )
   }
}

 