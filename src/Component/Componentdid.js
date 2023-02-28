import React from 'react'
import axios from 'axios';
import Posts from './post';
import Comments from './comment';
import Users from './users';
import { BrowserRouter, Link } from 'react-router-dom';



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

  componentDidMount() {
    console.log("componentDidMountCalled",this.state.renderType);
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
      .then(res => this.setState({
        items:res.data
      }));
  }

  // componentDidUpdate(prevProps,prevState){
  //   console.log(this.state.items);
  //   if(prevState.renderType!==this.state.renderType){
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //       .then(res => this.setState({
  //       items:res.data
  //       }));
  //   }
  // }

  changeState = (renderType)=>{
    console.log(this.state.items);
    // if(prevState.renderType!==this.state.renderType)
    {
    axios.get(`https://jsonplaceholder.typicode.com/${renderType}`)
        .then(res => this.setState({
        items:res.data,
        renderType: renderType
        }));
    }
  }

  del = (id)=>{
    const newItems = this.state.items.filter(item => item.id !== id);
    this.setState({items: newItems});
  }

  compareBy = (key) => {
    return function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
    };
  };
   
  sortBy = (key) => {
    let arrayCopy = [...this.state.items];
    arrayCopy.sort(this.compareBy(key));
    this.setState({items: arrayCopy});
  };
  
  render() {
    return (
        <div>
          <center>
            <br />
            {/* <button onClick={()=>this.changeState('posts')}>Posts</button>
            <button onClick={()=>this.changeState('comments')}>Comments</button>
            <button onClick={()=>this.changeState('users')}>Users</button> */}

            <BrowserRouter>
              <Link to="/posts"><button onClick={()=>this.handleUpdate("posts")}>Posts</button></Link>
              <Link to="/comments"><button onClick={()=>this.handleUpdate("comments")}>Comments</button></Link>
              <Link to="/users"><button onClick={()=>this.handleUpdate("users")}>Users</button></Link>
            </BrowserRouter>

            <hr color='black'/>
            <h1> {this.state.renderType} </h1>

            {this.state.renderType=== "posts" && <Posts items = {this.state.items} del={this.del} sortBy = {this.sortBy} /> }
            {this.state.renderType === "comments" && <Comments items = {this.state.items} del={this.del} sortBy = {this.sortBy} /> }
            { this.state.renderType==="users" && <Users items = {this.state.items} del={this.del} sortBy = {this.sortBy} />} 
            </center>
            
        </div>
    )
  }
}