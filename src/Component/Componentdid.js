import React from 'react'
import axios from 'axios';
import Posts from './post';
import Comments from './comment';
import Users from './users';


export default class ComponentClass extends React.Component {
    constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
        hello:true,
        renderType:'posts',
        items: [],
      };
  }

  
  render() {
    return (
        <div>
            <br />
            <center>
            <button onClick={()=>this.setState({renderType:"posts"})}>Posts</button>
            <button onClick={()=>this.setState({renderType:"comments"})}>Comments</button>
            <button onClick={()=>this.setState({renderType:"users"})}>Users</button>
            </center>

            <hr size="3" noshade="black" color="black"/>

            {this.state.renderType=== "posts" ? <Posts/> : (this.state.renderType === "comments" ? <Comments/> : <Users/>)} 
        </div>
    )
  }
}