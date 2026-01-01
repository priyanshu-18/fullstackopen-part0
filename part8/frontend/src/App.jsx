
import { gql, useQuery } from '@apollo/client'

const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author
    }
  }
`

const App = () => {
  const { data, loading } = useQuery(ALL_BOOKS)

  if (loading) return <div>loading...</div>

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {data.allBooks.map(b =>
          <li key={b.title}>{b.title} - {b.author}</li>
        )}
      </ul>
    </div>
  )
}

export default App
