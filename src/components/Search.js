import imageBooks from "../img/books.png"
import React from "react";
import styled from "styled-components";

function Search({ value, updateValue, onSearch = () => {}}) {
  return (
    <FlexWraper>
      <SearchWrapper>
        <Title>Online Library</Title>
        <Subtitle>search for books using the Google Books API</Subtitle>
        <Field>
          <Input type="text" placeholder="Search for books" value={value} onChange={t => { updateValue(t.currentTarget.value) }} />
          <Button color="#fff" variant="contained" onClick={onSearch}>
            Search
          </Button>
        </Field>
      </SearchWrapper>
      <Image>
        <img src={imageBooks} alt="Books" />
      </Image>
    </FlexWraper>
  )
}


const Image = styled.figure`
  flex: 1;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const SearchWrapper = styled.div`
  flex: 1;
  gap: 20px;
  display: flex;
  align-items: strech;
  flex-direction: column;
`

const Field = styled.div`
  width: 80%;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  padding: 0 15px;
  font-size: 16px;
  background: #f7f7f7;
  border-radius: 10px 0 0 10px;
`

const Button = styled.button`
  cursor: pointer;
  font-weight:bold;
  font-size: 16px;
  color: white;
  border: none;
  transition: .3s;
  padding: 15px 30px;
  background: #ef4855;
  border-radius: 0 10px 10px 0;
  &:hover {
    opacity: .7;
  }
`

const Title = styled.h4`
  margin: 0;
  font-size: 48px;
  font-weight: 900;
`

const Subtitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`

const FlexWraper = styled.div`
  gap: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export default Search