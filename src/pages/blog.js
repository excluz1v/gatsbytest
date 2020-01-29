import React from 'react'

import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'

import styles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
     query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date
                title
              }
              excerpt
              html
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  return (
    <Layout>
      <div>
        <h1> Blog</h1>
        <ol className={styles.posts}>
          {data.allMarkdownRemark.edges.map(e => {
            return (
              <li key={e.node.fields.slug} className={styles.post}>
                <Link to={`/blog/${e.node.fields.slug}`}><h2> {e.node.frontmatter.title}</h2></Link>
                <p>{e.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage