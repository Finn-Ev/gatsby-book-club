import { graphql } from 'gatsby'
import React from 'react'
import BookItem from '../components/bookItem'
import Layout from '../components/layout'

const bookTemplate = ({ data: { book } }) => {
  return (
    <Layout>
      <BookItem
        bookCover={book.localImage.childImageSharp.fixed}
        authorName={book.author.name}
        bookSummary={book.summary}
        bookTitle={book.title}
      />
    </Layout>
  )
}

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: { eq: $bookId }) {
      id
      summary
      title
      localImage {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author {
        name
      }
    }
  }
`

export default bookTemplate
