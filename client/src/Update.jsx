import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
  const { id } = useParams()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3019/getUser/' + id)
      .then(result => {
        setName(result.data.name)
        setAge(result.data.age)
        setEmail(result.data.email)
      })
      .catch(err => console.log(err))
  }, []);

  // ✅ Difference 1: PUT request instead of POST
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3019/updateUser/' + id, { name, email, age })
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>

        {/* ✅ Difference 2: onSubmit calls handleUpdate */}
        <form onSubmit={handleUpdate}>

          {/* ✅ Difference 3: h2 says "Update User" */}
          <h2>Update User</h2>

          <div className='mb-2'>
            <label>Name</label>
            <input
              type="text"
              placeholder='Enter Name'
              className='form-control'
              value={name}                            // same as Create
              onChange={e => setName(e.target.value)} // same as Create
            />
          </div>
          <div className='mb-2'>
            <label>Email</label>
            <input
              type="email"
              placeholder='Enter Email'
              className='form-control'
              value={email}                            // same as Create
              onChange={e => setEmail(e.target.value)} // same as Create
            />
          </div>
          <div className='mb-2'>
            <label>Age</label>
            <input
              type="text"
              placeholder='Enter Age'
              className='form-control'
              value={age}                            // same as Create
              onChange={e => setAge(e.target.value)} // same as Create
            />
          </div>
          <button type="submit" className='btn btn-success'>Update User</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser