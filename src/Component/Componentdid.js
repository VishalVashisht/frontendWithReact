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

  componentDidMount() {
    console.log("componentDidMountCalled",this.state.renderType);
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
      .then(res => this.setState({
        items:res.data
      }));
  }

  componentDidUpdate(prevProps,prevState){
    console.log(this.state.items);
    if(prevState.renderType!==this.state.renderType){
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
        .then(res => this.setState({
        items:res.data
        }));
    }
  }

  del = (id)=>{
    const newItems = this.state.items.filter(item => item.id !== id);
    this.setState({items: newItems});
  }


  changeState = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
        .then(res => this.setState({
        items:res.data.reverse()
        }));
  }
  
  render() {
    return (
        <div>
          <center>
            <br />
            <button onClick={()=>this.setState({renderType:"posts"})}>Posts</button>
            <button onClick={()=>this.setState({renderType:"comments"})}>Comments</button>
            <button onClick={()=>this.setState({renderType:"users"})}>Users</button>
            <button onClick={()=>this.changeState()}>Reverse</button>
            <hr color='black'/>

            {this.state.renderType=== "posts" && <Posts items = {this.state.items} del={this.del}  /> }
            {this.state.renderType === "comments" && <Comments items = {this.state.items} del={this.del}/> }
            { this.state.renderType==="users" && <Users items = {this.state.items} del={this.del}/>} 
            </center>
            
        </div>
    )
  }
}