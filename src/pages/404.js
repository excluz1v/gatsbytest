import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"


const NotFoundPage = () => (
  <Layout>
    <Head title='404 error'></Head>
    <h1>Page not found</h1>
    <Link to='/'>Home</Link>
  </Layout>
)

export default NotFoundPage
