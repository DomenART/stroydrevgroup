import React, { Component } from 'react'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader'
import PageMain from '../components/Page/PageMain'
import PostMain from '../components/Post/PostMain'
import PostTitle from '../components/Post/PostTitle'
import PostHeadline from '../components/Post/PostHeadline'
import PostIntro from '../components/Post/PostIntro'
import PageContent from '../components/Page/PageContent'
import PageQuestions from '../components/Page/PageQuestions'
import Breadcrumbs from '../components/UI/Breadcrumbs'

class Page extends Component {
    render() {
        const { breadcrumbs, neighbors } = this.props.pathContext
        const { page } = this.props.data

        return (
            <Layout>
                <Head title={page.title} />
                <PageMain>
                    <PageHeader />
                </PageMain>
                <PostMain>
                    <Breadcrumbs items={breadcrumbs} />
                    <PostTitle html={page.title} />
                </PostMain>
                <PageMain>
                    <PostHeadline
                        page={page}
                        neighbors={neighbors}
                    />
                    <PostIntro
                        text={page.excerpt}
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
    query postPageQuery($id: String!) {
        page: wordpressPost(id: { eq: $id }) {
            wordpress_id
            title
            content
            views
            likes
            excerpt
            categories {
                id
                name
                slug
            }
            tags {
                id
                name
            }
            date(formatString: "DD.MM.YYYY")
            acf {
                seo_title
                seo_keywords
                seo_description
            }
        }
    }
`