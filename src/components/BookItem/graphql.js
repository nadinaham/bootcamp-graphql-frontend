import gql from 'graphql-tag'

export const DELETE_BOOK = gql`
    mutation deleteBook($input: ID!) {
        deleteBook(input: $input)
  }
`

export const ADD_BOOK = gql`
    mutation addBook($input: addBookInput!!) {
        addBook(input: $input)
  }
`
