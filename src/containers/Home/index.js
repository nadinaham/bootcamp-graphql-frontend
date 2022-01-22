import React from 'react'

const Home = () => {

    const { loading, error , data: bookData } = useQuery(GET_ALL_BOOKS, {})
      if(loading){
        return <Text>Loading...</Text>
      } else if(error){
        return <Text>Error!</Text>
      }

    const { loading, error , data: authorData } = useQuery(GET_ALL_AUTHORS, {})
      if(loading){
        return <Text>Loading...</Text>
      } else if(error){
        return <Text>Error!</Text>
      }

return (
    <div>
        Welcome to nadine's graphql frontend test!
        <BookTable input={bookData}/>
        <AuthorTable input={authorData}/>
        <button>Add Example Book</button>
    </div>
)

}

export default Home
