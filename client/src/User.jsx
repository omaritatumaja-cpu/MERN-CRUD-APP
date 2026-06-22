import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3019')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3019/deleteUser/'+ id)
    .then(res =>{//console.log(res.data)
       
        setUsers(prev => prev.filter(user => user._id !== id)) 
    } )
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success mb-2">add +</Link>

        {/* Scrollable wrapper */}
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <table className="table table-bordered table-hover">
             {/* header stays visible while scrolling */}
            <thead className="sticky-top table-dark"> 
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className="btn btn-primary btn-sm me-1">Update</Link>
                    <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default User