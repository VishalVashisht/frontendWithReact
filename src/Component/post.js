import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default class Posts extends React.Component {
    constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
        renderType:'posts',
        items: [],
      };
  }
  
  // changeState = ()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //   .then(res => this.setState({
  //     items:res.data.reverse()
  //   }));
  // }


  render() {
    const Posts = this.props.items;
    return (
      <div> 
        {/* <center>
        <h1> {this.state.renderType} </h1>
        </center> */}


        <table border={2}>
          <tbody>
            <tr>
                <th>UserId <ImportExportIcon  onClick={()=>{this.props.sortBy('userId')}}/></th>
                <th>Id <ImportExportIcon onClick={()=>{this.props.sortBy('id')}} /> </th>
                <th>Title <ImportExportIcon onClick={()=>{this.props.sortBy('title')}}/> </th>
                <th>Body <ImportExportIcon  onClick={()=>{this.props.sortBy('body')}}/> </th>
                <th>Delete</th>
            </tr>
          </tbody>

        <tbody>

          
        {Posts && Posts.map((item)=>{
          return (
          <tr>
            <td>{item.userId}</td> 
            <td>{item.id}</td> 
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td> <DeleteIcon onClick={()=>{this.props.del(item.id)}}/> </td>
          </tr>)
        })}
        </tbody>
        </table>
      </div>
    )
  }
}
