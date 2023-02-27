import React from 'react'
import axios from 'axios';

export default class Comments extends React.Component {
    constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
        renderType:'comments',
        items: [],
        revData : false
      };
  }

  
  render() {
    const Comments = this.props.items;
    return (
      <div> 
        <center>
        <button onClick={()=>this.changeState()}>Reverse</button>
        <h1> {this.state.renderType} </h1>
        </center>


        <table border={2} >
          <thead>
            <tr>
                <th>PostId</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
            </tr>
          </thead>

        <tbody>

        {Comments && Comments.map((item)=>{
          return (<tr><td>{item.postId}</td><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td>  <td> <button>Delete</button> </td></tr>)
         })}
        </tbody>
        </table>

        {/* <div>
        <h1> {this.state.renderType} </h1>
        {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item)}</pre>
        })}
        </div> */}
      </div>
    )
  }
}