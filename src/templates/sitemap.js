import React, { Component } from 'react'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader.js'
import PageMain from '../components/Page/PageMain.js'
import PageTitle from '../components/Page/PageTitle.js'
import PageContent from '../components/Page/PageContent.js'
import PageQuestions from '../components/Page/PageQuestions'
import Breadcrumbs from '../components/UI/Breadcrumbs'
import Sitemap from '../components/Sitemap/Sitemap'

class Page extends Component {
    render() {
        const { breadcrumbs } = this.props.pathContext
        const { page, articles, projects } = this.props.data

        return (
            <Layout>
                <Head title={page.title} />
                <PageMain>
                    <PageHeader />
                    <Breadcrumbs items={breadcrumbs} />
                    <PageTitle html={page.title} />
                    <Sitemap
                        articles={articles}
                        projects={projects}
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
    query sitemapPageQuery($id: String!) {
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
        articles: allWordpressPost {
            edges {
                node {
                    id
                    link
                    title
                }
            }
        }
        projects: allWordpressWpProject {
            edges {
                node {
                    id
                    link
                    title
                }
            }
        }
    }
`
