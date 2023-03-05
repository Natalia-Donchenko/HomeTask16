import React, { useState } from 'react';


export default props => (
  <table className='table'>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Age</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      { props.data.users.map(item => (
        <tr key={item.id}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>{item.age}</td>
          <td className='btn btn-light'>Edit</td>
        </tr>
      ))}
    </tbody>
  </table>
)