import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './header.module.css'


const Header = () => {
  const data2 = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            
            title
          }
        }
      }
      
    `)
  return (
    <header className={styles.header}>
      <h1><Link to='/'>{data2.site.siteMetadata.title}</Link></h1>
      <ul className={styles.navList}>
        <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to='/'>Home</Link></li>
        <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to='/blog'>Blog</Link></li>
        <li> <Link className={styles.navItem} activeClassName={styles.activeNavItem} to='/contact'>contact</Link></li>
      </ul>
    </header>
  )
}
export default Header