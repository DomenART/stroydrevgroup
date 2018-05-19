import React, { Component } from 'react'
import { Provider, Consumer } from '../components/Catalog/FilterContext'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader.js'
import PageMain from '../components/Page/PageMain.js'
import PageTitle from '../components/Page/PageTitle.js'
import CatalogFilter from '../components/Catalog/CatalogFilter.js'
import Flexible from '../components/Flexible/Flexible'
import Breadcrumbs from '../components/UI/Breadcrumbs'

class Page extends Component {
    render() {
        const { breadcrumbs, options } = this.props.pathContext
        const { page } = this.props.data
        // console.log(options)

        return (
            <Layout>
                <Head title={page.title} />
                <PageMain>
                    <PageHeader />
                    <Breadcrumbs items={breadcrumbs} />
                    <PageTitle html={page.title} />
                    <CatalogFilter />
                    <div
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    />
                    {/* <Flexible rows={page.acf.content_page} /> */}
                </PageMain>
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
