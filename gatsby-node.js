const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
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
                  src
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
  `)

  if (res.errors) throw res.errors

  return res.data.allBook.edges.forEach((book) => {
    createPage({
      path: `/book/${book.node.id}`,
      component: path.resolve('src/templates/bookTemplate.js'),
      context: { bookId: book.node.id },
    })
  })
}
