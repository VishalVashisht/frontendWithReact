import axios from "axios";
import { useState, useEffect } from "react";

function Axioss(){
    const[myData, setData]= useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setData(res.data)
        });
    },[]);

    return(
        <>
        <h1>Axios</h1>
        {myData.map((post)=>{
            const{id,title,body}=post;
    
            return(
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            )
        })}
        </>
    )
}

export default Axioss;