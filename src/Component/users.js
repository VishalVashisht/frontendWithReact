import {React} from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default function users(props){
  return(
    <> <br />
        <table border={2}>
        <thead>
            <tr>
                <th>Id <ImportExportIcon  onClick={()=>{props.sortBy('id')}} /> </th>
                <th>Name <ImportExportIcon  onClick={()=>{props.sortBy('name')}} /> </th>
                <th>Email <ImportExportIcon  onClick={()=>{props.sortBy('email')}} /> </th>
                <th>Username <ImportExportIcon  onClick={()=>{props.sortBy('username')}} /> </th>
                <th>Phone <ImportExportIcon  onClick={()=>{props.sortBy('phone')}} /> </th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              {props.items && props.items.map(user =>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td> <DeleteIcon onClick={()=>{props.del(user.id)}}/> </td>
                </tr>)}
            </tbody>
        </table>
        <br />
      </>
  )
}