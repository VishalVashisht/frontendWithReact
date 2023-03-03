import {React} from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default function posts(props){
  return(
    <>
      <table border={2}>
          <tbody>
            <tr>
                <th>UserId <ImportExportIcon  onClick={()=>{props.sortBy('userId')}}/></th>
                <th>Id <ImportExportIcon onClick={()=>{props.sortBy('id')}} /> </th>
                <th>Title <ImportExportIcon onClick={()=>{props.sortBy('title')}}/> </th>
                <th>Body <ImportExportIcon  onClick={()=>{props.sortBy('body')}}/> </th>
                <th>Delete</th>
            </tr>
          </tbody>
        <tbody>

          
        {props.items && props.items.map((item)=>{
          return (
          <tr key={item.id}>
            <td>{item.userId}</td> 
            <td>{item.id}</td> 
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td> <DeleteIcon onClick={()=>{props.del(item.id)}}/> </td>
          </tr>)
        })}
        </tbody>
        </table>
    </>
  )
}