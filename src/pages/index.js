import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BookItem from '../components/bookItem'
import Layout from '../components/layout'

const LinkWrapper = styled.div`
  text-align: right;
  a {
    padding: 8px;
    background: rebeccapurple;
    color: white;
    border-radius: 8px;
    text-decoration: none;

    &:hover {
      background: indigo;
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allBook.edges.map(
        ({ node: { title, summary, author, id, localImage } }) => {
          return (
            <BookItem
              key={id}
              bookCover={localImage.childImageSharp.fixed}
              bookTitle={title}
              bookSummary={summary}
              authorName={author.name}
            >
              <LinkWrapper>
                <Link to={`/book/${id}`}>Join conversation</Link>
              </LinkWrapper>
            </BookItem>
          )
        }
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
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
    }
  }
`

export default IndexPage
