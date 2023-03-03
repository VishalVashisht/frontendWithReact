// import {React, Component} from 'react'
// import axios from 'axios';
// import Posts from './post';
// import Comments from './comment';
// import Users from './users';
// import { BrowserRouter, Link } from 'react-router-dom';
// import { useState } from 'react';



// export default class ComponentClass extends Component {
//     constructor(props) {
//     super(props);
  
//     // Initializing the state 
//     this.state = {
//         items: [],
//         renderType:""
//       };
//   }

//   changeState = (renderVal)=>{
//     axios.get(`https://jsonplaceholder.typicode.com/${renderVal}`)
//         .then(res => this.setState({
//         items:res.data,
//         renderType: renderVal
//         }));
//         // renderType = renderVal;
//   }

//   del = (id)=>{
//     const newItems = this.state.items.filter(item => item.id !== id);
//     this.setState({items: newItems});
//   }

//   compareBy = (key) => {
//     return function(a, b) {
//     if (a[key] < b[key]) return -1;
//     if (a[key] > b[key]) return 1;
//     return 0;
//     };
//   };
   
//   sortBy = (key) => {
//     let arrayCopy = [...this.state.items];
//     arrayCopy.sort(this.compareBy(key));
//     this.setState({items: arrayCopy});
//   };
  
//   render() {
//     return (
//         <>
//           <center>
//             <br />

//             <BrowserRouter>
//               <Link to="/posts"><button onClick={()=>this.changeState("posts")}>Posts</button></Link>
//               <Link to="/comments"><button onClick={()=>this.changeState("comments")}>Comments</button></Link>
//               <Link to="/users"><button onClick={()=>this.changeState("users")}>Users</button></Link>
//               </BrowserRouter>

//             <hr color='black'/>
//             <h1> {this.state.renderType} </h1>

//             {this.state.renderType=== "posts" && <Posts items = {this.state.items} del={this.del} sortBy = {this.sortBy} /> }
//             {this.state.renderType === "comments" && <Comments items = {this.state.items} del={this.del} sortBy = {this.sortBy} /> }
//             {this.state.renderType==="users" && <Users items = {this.state.items} del={this.del} sortBy = {this.sortBy} />} 
//             </center>
//         </>
//     )
//   }
// }

