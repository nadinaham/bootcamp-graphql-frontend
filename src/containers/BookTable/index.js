import React from 'react'
import BookItem from '../../components/BookItem'

const BookTable = ({ input }) => {

  return (
    <>
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <th><h2>Title</h2></th>
            <th><h2>AuthorId</h2></th>
            <th><h2>Bestseller</h2></th>
            <th><h2>Delete</h2></th>
          </tr>
        </thead>
        <tbody>
          {input.allBooks.map(book => (
            <BookItem
              key={book.id}
              title={book.title}
              author={book.authorId}
              bestseller={book.bestseller}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default BookTable
