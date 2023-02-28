import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default class Users extends React.Component {

  // changeState=()=>{
  // var users=this.props.items;
  // // users=users.reverse();
  // console.log('reverse',users)
  // this.render();
  // }


  render() {
    const users= this.props.items;
    console.log(users,"hii users")
    return (
      <div> 
        <center>
        </center>
        <br />
        <table border={2}>
        <thead>
            <tr>
                <th>Id <ImportExportIcon  onClick={()=>{this.props.sortBy('id')}} /> </th>
                <th>Name <ImportExportIcon  onClick={()=>{this.props.sortBy('name')}} /> </th>
                <th>Email <ImportExportIcon  onClick={()=>{this.props.sortBy('email')}} /> </th>
                <th>Username <ImportExportIcon  onClick={()=>{this.props.sortBy('username')}} /> </th>
                <th>Phone <ImportExportIcon  onClick={()=>{this.props.sortBy('phone')}} /> </th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              {users && users.map(user =>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td> <DeleteIcon onClick={()=>{this.props.del(user.id)}}/> </td>
                </tr>)}
            </tbody>
        </table>
        <br />
      </div>
    )
  }
}