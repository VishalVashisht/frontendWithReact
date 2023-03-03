import {React, Component} from 'react'
import axios from 'axios';
import Posts from './post';
import Comments from './comment';
import Users from './users';
import { BrowserRouter, Link } from 'react-router-dom';
import { useState } from 'react';


export default function ComponentClass(){
  const[myData,setData]= useState();
  const [renderType, setRenderType] = useState();

  function changeState(renderVal){
    axios.get(`https://jsonplaceholder.typicode.com/${renderVal}`)
        .then(res => setData(
          res.data
        ));
        setRenderType(renderVal);
  }
  
  function del(id){
    setData(myData.filter(item => item.id !== id));
  }
  
  function compareBy(key){
    return function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
    };
  };
   
  function sortBy(key){
    let arrayCopy = [...myData];
    arrayCopy.sort(compareBy(key));
    setData(arrayCopy);
  };


  return (
    <>
      <center>
        <br />
        <BrowserRouter>
          <Link to="/posts"><button onClick={()=>changeState("posts")}>Posts</button></Link>
          <Link to="/comments"><button onClick={()=>changeState("comments")}>Comments</button></Link>
          <Link to="/users"><button onClick={()=>changeState("users")}>Users</button></Link>
          </BrowserRouter>

        <hr color='black'/>
        <h1> {renderType} </h1>

        {renderType=== "posts" && <Posts items = {myData} del={del} sortBy = {sortBy} /> }
        {renderType=== "comments" && <Comments items = {myData} del={del} sortBy = {sortBy} /> }
        {renderType=== "users" && <Users items = {myData} del={del} sortBy = {sortBy} />} 
      </center>
    </>
  )
}
