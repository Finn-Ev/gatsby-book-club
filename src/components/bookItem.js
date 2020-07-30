import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const BookItemWrapper = styled.section`
  border: #ddd solid 1px;
  background: 'white';
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  h2 {
    small {
      font-weight: 'normal';
      font-size: 14px;
      padding-left: 10px;
    }
  }
`

const BookItemImageWrapper = styled.section`
  max-width: 200px;
  img {
    max-width: 200px;
  }
`
const BookItemContentWrapper = styled.div`
  flex-grow: 1;
  padding-left: 12px;
`

const BookItem = ({
  authorName,
  bookTitle,
  bookSummary,
  bookCover,
  children,
}) => {
  return (
    <BookItemWrapper>
      <BookItemImageWrapper>
        <Img fixed={bookCover} />
      </BookItemImageWrapper>
      <BookItemContentWrapper>
        <h2>
          {bookTitle} <small>{authorName}</small>
        </h2>
        <p>{bookSummary}</p>
        <div>{children}</div>
      </BookItemContentWrapper>
    </BookItemWrapper>
  )
}
export default BookItem
