import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default class Comments extends React.Component {
    constructor(props) {
    super(props);
  
    this.state = {
        renderType:'comments',
        items: [],

      };
  }

  
  render() {
    const Comments = this.props.items;
    return (
      <div> 
        {/* <center>
        <h1> {this.state.renderType} </h1>
        </center> */}


        <table border={2} >
          <thead>
            <tr>
                <th>PostId <ImportExportIcon  onClick={()=>{this.props.sortBy('postId')}} /> </th>
                <th>Id <ImportExportIcon  onClick={()=>{this.props.sortBy('id')}} /> </th>
                <th>Name <ImportExportIcon  onClick={()=>{this.props.sortBy('name')}} /> </th>
                <th >Email <ImportExportIcon  onClick={()=>{this.props.sortBy('email')}} /> </th>
                <th>Delete</th>
            </tr>
          </thead>

        <tbody>

        {Comments && Comments.map((item)=>{
          return (
          <tr>
            <td>{item.postId}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td> <DeleteIcon onClick={()=>{this.props.del(item.id)}}/> </td>
            </tr>)
         })}
        </tbody>
        </table>
      </div>
    )
  }
}