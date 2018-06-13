import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader'
import PageMain from '../components/Page/PageMain'
import PageTitle from '../components/Page/PageTitle'
import PageContent from '../components/Page/PageContent'
import PageQuestions from '../components/Page/PageQuestions'
import CatalogFilter from '../components/Catalog/CatalogFilter'
import Breadcrumbs from '../components/UI/Breadcrumbs'

class Page extends Component {
    render() {
        const { breadcrumbs, options } = this.props.pathContext
        const { page } = this.props.data

        return (
            <Layout>
                <Head
                    title={page.title}
                    seo_title={page.acf.seo_title}
                    seo_keywords={page.acf.seo_keywords}
                    seo_description={page.acf.seo_description}
                />
                <PageMain>
                    <PageHeader />
                    <Breadcrumbs items={breadcrumbs} />
                    <PageTitle html={page.title} />
                    <CatalogFilter
                        filters={page.acf.filters}
                        page_id={this.props.pathContext.id}
                    />
                </PageMain>
                {(page.content || page.acf.content_page) && (
                    <PageContent
                        content={page.content}
                        flexible={page.acf.content_page}
                    />
                )}
                <PageQuestions />
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
                filters {
                    name
                    values {
                        active
                        disabled
                        type
                        title
                        compare
                        value
                    }
                }
                content_page {
                    ...FlexibleFields
                }
            }
        }
    }
`
