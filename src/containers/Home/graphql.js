import gql from 'graphql-tag'

export const GET_ALL_BOOKS = gql`
    query allBooks {
        allBooks {
        id
        title
        bestseller
        authorId
        publisherId
        }
  }
`

export const GET_ALL_AUTHORS = gql`
    query allAuthors {
        allAuthors {
        id
        email
        firstName
        lastName
        addressId
        }
  }
`
