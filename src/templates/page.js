import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'

class Page extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data ? this.props.data.wordpressPage : {}

        return (
            <Layout>
                <Head title={currentPage.title} />
                <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
            </Layout>
        )
    }
}

export default Page

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`
