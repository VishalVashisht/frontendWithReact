import {React,Component} from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default class Comments extends Component {
  render() {
    return (
      <> 
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

        {this.props.items && this.props.items.map((item)=>{
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
      </>
    )
  }
}