import React, { useState } from "react";
import Hindi from "./hindi";
import English from "./english";

export default function User(){
    let val = Math.floor((Math.random()*100) + 1);
    var[count,setData]= useState(val);
    var[greet,changeGreet]=useState(true);

    function single(value){
        setData(
            count= value===1 ? count+1 : (count===0 ? 0:count-1)
        )
    }

    function changeLang(){
        changeGreet(
            greet= !greet
        )
    }
    
   function reset(){
        setData(count=val)
    }


    return(
        <>
        <div className="hmmm">
            {greet ? <English/> : <Hindi/>} 
            <button onClick={()=>changeLang()}>Change Lang</button>
            <h1>{count}</h1>
            <button onClick={()=>single(1)}>Increase </button>
            <button onClick={()=>single(0)}>Decrease </button>
            <button onClick={()=>reset()}>Reset </button>
        </div>
        </>
    )
}




