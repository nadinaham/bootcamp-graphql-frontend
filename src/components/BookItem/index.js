import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_BOOK } from './graphql'
import { GET_ALL_BOOKS } from '../../containers/Home/graphql'

const BookItem = prop => {
  const [bookID, setBook] = useState('')

  const [handleDeleteBook, { loading, error }] = useMutation(DELETE_BOOK, {
    variables: {
      id: bookID,
    },
    refetchQueries: () => [{ query: GET_ALL_BOOKS }],
    update: (client, { data }) => {
      try {
        const thisData = client.readQuery({ query: GET_ALL_BOOKS })
        data = [...thisData.currentlyReadData, handleAddFollow]
        client.writeQuery({ query: GET_FOLLOWERS_BY_USER, thisData })
      } catch (e) {
        // do nothing or display error state
      }
    },
  })

  const setId = async id => {
    const set = new Promise(resolve => {
      setBook(id)
      resolve('test')
    })
    set.then(val => {
      handleDeleteBook()
    })
  }

  return (
    <tr>
      <td><text>{prop.title}</text></td>
      <td><text>{prop.author}</text></td>
      <td><text>{prop.bestseller}</text></td>
      <td><button type="submit" onClick={setId(prop.key)}>Delete</button></td>
    </tr>
  )
}

export default BookItem
