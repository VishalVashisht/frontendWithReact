import React from "react";
import Hindi from "./hindi";
import English from "./english";

let val = Math.floor((Math.random()*100) + 1);

export default class User extends React.Component{
    
    constructor(){
        super();
        this.state = { 
            count: val,
            greet: true
        }
    }
    
    single(value){
        this.setState({
            count: value==1 ? this.state.count+1 : (this.state.count==0 ? 0:this.state.count-1)
        })

    }

    changeLang = ()=>{
        this.setState({
            greet: !this.state.greet
        })
    }
    
    reset(){
        this.setState({count:val})
    }

    render(){
        return(
            <>
            <div class="hmmm">
                {this.state.greet ? <English/> : <Hindi/>} 
                <button onClick={()=>{this.changeLang()}}>Change Lang</button>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.single(1)}>Increase </button>
                <button onClick={()=>this.single(0)}>Decrease </button>
                <button onClick={()=>this.reset()}>Reset </button>
                </div>
            </>
        )
    }
}