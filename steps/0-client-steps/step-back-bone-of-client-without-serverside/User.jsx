
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const User = () => {
  const [users,setUsers] = useState([{Name:"John",Email:"john@example.com",Age:30}]);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-success ">add +</Link>
        <table className="table">
            <thead>
                <tr> 
                    <th>Name</th>
                    <th>Email</th>
                    <th>age</th>
                    <th>Action</th>
                   
                 </tr>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <tr key={index} >
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Age}</td>
                        <td>
                            
                            <Link to="/update" className="btn btn-primary btn-sm">Update</Link>
                            <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody> 
            </table>      
        </div >
        </div>
  )
}

export default User