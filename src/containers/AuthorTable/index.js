import React from 'react'
import AuthorItem from '../../components/AuthorItem'

const AuthorTable = ({ input }) => {

  return (
    <>
      <h1>Authors</h1>
      <table>
        <thead>
          <tr>
            <th><h2>First Name</h2></th>
            <th><h2>Last Name</h2></th>
            <th><h2>Email</h2></th>
          </tr>
        </thead>
        <tbody>
          {input.allAuthors.map(author => (
            <AuthorItem
              key={author.id}
              firstName={author.firstName}
              lastName={author.lastName}
              email={author.email}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default AuthorTable
