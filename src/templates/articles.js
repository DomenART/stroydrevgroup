import React, { Component } from 'react'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader'
import PageMain from '../components/Page/PageMain'
import PageTitle from '../components/Page/PageTitle'
import PageContent from '../components/Page/PageContent'
import PageQuestions from '../components/Page/PageQuestions'
import Breadcrumbs from '../components/UI/Breadcrumbs'
import AboutMain from '../components/About/AboutMain'
import ArticlesFilter from '../components/Articles/ArticlesFilter'

class Page extends Component {
    render() {
        const { breadcrumbs } = this.props.pathContext
        const { page, tags } = this.props.data

        return (
            <Layout>
                <Head title={page.name} />
                <PageMain>
                    <PageHeader />
                </PageMain>
                <AboutMain>
                    <Breadcrumbs items={breadcrumbs} />
                    <PageTitle html={page.name} />
                    <ArticlesFilter
                        rubric={page.wordpress_id}
                        tags={tags.edges.map(row => row.node)}
                        page_id={this.props.pathContext.id}
                    />
                </AboutMain>
                {(page.description || page.acf.content_page) && (
                    <PageContent
                        content={page.description}
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
    query categoryQuery($id: String!) {
        page: wordpressCategory(id: { eq: $id }) {
            wordpress_id
            name
            description
            acf {
                seo_title
                seo_keywords
                seo_description
                content_undefined {
                    ...FlexibleFields
                }
            }
        }
        tags: allWordpressTag {
            edges {
                node {
                    id
                    name
                    wordpress_id
                }
            }
        }
    }
`