import styled from "styled-components"

export const List = ({ books, selectBook}) => (
  <ListContainer>
    {books.map((book) => {
      return (
        <BookItem item onClick={() => selectBook(book)}>
          <figure>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          </figure>
          <h4>
            {book.volumeInfo.title}
          </h4>
          <div className="published">{book.volumeInfo.publishedDate}</div>
        </BookItem>
      )
    })}
  </ListContainer>
)

const ListContainer = styled.div`
  gap: 60px 40px;
  display: grid;
  margin-top: 6rem;
  padding-bottom: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
const BookItem = styled.div`
  gap: 5px;
  width: 100%;
  display: flex;
  cursor: pointer;
  flex-direction: column;

  figure {
    margin: 0;
    width: 100%;
    display: block;
    position: relative;
    background: #2724473d;
    padding-bottom: 138%;
    overflow: hidden;
    border-radius: 10px;

    img {
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
  }

  h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }

  span {
    font-size: 11px;
  }

  .published {
    opacity: .6;
    font-size: 10px;
  }
`
