import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import Flexible from '../components/Flexible/Flexible'
import Breadcrumbs from '../components/UI/Breadcrumbs'

class Page extends Component {
    render() {
        const { breadcrumbs } = this.props.pathContext
        const { page } = this.props.data

        return (
            <Layout>
                <Head title={page.title} />
                <Breadcrumbs items={breadcrumbs} />
                <h1
                    dangerouslySetInnerHTML={{ __html: page.title }}
                />
                <div
                    dangerouslySetInnerHTML={{ __html: page.content }}
                />
                {/* <Flexible rows={page.acf.content_page} /> */}
            </Layout>
        )
    }
}

export default Page

export const query = graphql`
    query catalogPageQuery($id: String!) {
        page: wordpressPage(id: { eq: $id }) {
            title
            content
            date(formatString: "MMMM DD, YYYY")
            acf {
                seo_title
                seo_keywords
                seo_description
            }
        }
    }
`
