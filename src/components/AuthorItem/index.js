import React from 'react'

const AuthorItem = prop => {

  return (
    <tr>
      <td><text>{prop.firstName}</text></td>
      <td><text>{prop.lastName}</text></td>
      <td><text>{prop.email}</text></td>
    </tr>
  )
}

export default AuthorItem
