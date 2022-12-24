import React from 'react';
import styled from 'styled-components';
import { List } from './components/List';
import { Modal } from './components/Modal';
import Search from './components/Search';

const MAX_RESULT = 10;

function App() {
  const [term, setTerm] = React.useState('');
  const [books, setBooks] = React.useState([]);
  const [selectedBook, setSelectedBook] = React.useState();
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    if (page === 0 && books.length === 0) {
      return;
    }
    getBooks({ term, page, token: process.env.REACT_APP_TOKEN }).then(setBooks)
  }, [page])

  return (
    <Container>
      <Grid>
        <Search
          value={term}
          updateValue={setTerm}
          onSearch={() => getBooks({ term, page, token: process.env.REACT_APP_TOKEN }).then(setBooks)} />
        <List
          books={books}
          selectBook={setSelectedBook} />
        <Pagination>
          {page > 0 && <button onClick={() => setPage(page - MAX_RESULT)}>PREV</button>}
          {!!books.length && <button onClick={() => setPage(page + MAX_RESULT)}>NEXT</button>}
        </Pagination>
      </Grid>
      <Modal
        show={!!selectedBook}
        volumeInfo={selectedBook?.volumeInfo}
        onClose={() => setSelectedBook()} />

    </Container>
  );
}

export default App;

const getBooks = ({ term, page, token, maxResult=MAX_RESULT }) => (
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${page}&maxResults=${maxResult}&key=${token}`)
    .then((response) => response.json())
    .then((result) => result?.items || [])
)

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 10px;
    background: #ef4855;
    margin-bottom: 3rem;
  }
`

const Container = styled.div`
  margin: auto;
  color: #793639;
  padding-left: 10%;
  min-height: 100vh;
  padding-right: 10%;
  background: #edc9b6;
  font-family: 'Unbounded', cursive;
`

const Grid = styled.div`
  margin: auto;
  max-width: 1000px;
`
