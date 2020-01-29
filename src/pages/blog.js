import React from 'react'

import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'

import styles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query  {
    allContentfulBlogPosts(sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          title
          publishDate(fromNow: true, formatString: "DD MMMM YYYY")
          slug
        }
      }
    }
  }
  
    `)
  return (
    <Layout>
      <Head title='Blog'></Head>
      <div>
        <h1> Blog</h1>
        <ol className={styles.posts}>
          {data.allContentfulBlogPosts.edges.map(e => {
            return (
              <li key={e.node.slug} className={styles.post}>
                <Link to={`/blog/${e.node.slug}`}><h2> {e.node.title}</h2></Link>
                <p>{e.node.publishDate}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage