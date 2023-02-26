import React from 'react'
import axios from 'axios';

export default class Posts extends React.Component {
    constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
        renderType:'posts',
        items: [],
        // revData:false
      };
  }

  componentDidMount() {
    console.log("componentDidMountCalled",this.state.renderType);
    
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
      .then(res => this.setState({
        items:res.data
      }));
  }

//   componentDidUpdate(prevProps,prevState){
//     console.log('componentdidUpdate',this.state.renderType)
//     console.log(this.state.items);
//     if(prevState.renderType!==this.state.renderType){
//     axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
//     .then(res => this.setState({
//       items:res.data.reverse()
//     }));
// }
//   }
  
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
        <button onClick={()=>this.changeState()}>Reverse</button>
        <h1> {this.state.renderType} </h1>
        </center>


        <table border={2}>
            <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>

        <tr>
            <td>
            {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.userId)}</pre>
        })} 
            </td>
            <td>
            {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.id)}</pre>
        })} 
            </td>
            <td>
            {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.title)}</pre>
        })} 
            </td>
            <td>
            {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.body)}</pre>
        })} 
            </td>
        </tr>
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



















