import React, { useState, useEffect } from 'react'

const ManageUser = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
  })

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) setError('Failed to fetch data');

      const jsonData = await response.json();

      console.log(jsonData);

      setUsers(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='user-table'>
      <h1>USERS ACCOUNT</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Zip Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{`${user.address.suite}, ${user.address.street}, ${user.address.city} City`}</td>
                <td>{user.address.zipcode}</td>
                <td>
                  <button className='user-edit'>Edit</button>
                  <button className='user-delete'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ManageUser