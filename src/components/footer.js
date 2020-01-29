import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './footer.module.css'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
            }
        }
      }
    `)
  return (
    <footer className={styles.footer}>
      <p> Created by {data.site.siteMetadata.author}, &copy;</p>
    </footer>
  )
}

export default Footer