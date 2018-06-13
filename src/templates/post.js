import React, { Component } from 'react'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader'
import PageMain from '../components/Page/PageMain'
import PostMain from '../components/Post/PostMain'
import PostTitle from '../components/Post/PostTitle'
import PostHeadline from '../components/Post/PostHeadline'
import PostContent from '../components/Post/PostContent'
import PostRelated from '../components/Post/PostRelated'
import PageSubscription from '../components/Page/PageSubscription'
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
                        tags={page.tags}
                        date={page.date}
                        likes={page.likes}
                        views={page.views}
                        wordpress_id={page.wordpress_id}
                        neighbors={neighbors}
                    />
                    <PostContent
                        excerpt={page.excerpt}
                        content={page.content}
                        neighbors={neighbors}
                    />
                </PageMain>
                {page.acf.related && (
                    <PostRelated
                        items={page.acf.related}
                    />
                )}
                <PageSubscription />
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
                related {
                    wordpress_id
                    post_title
                    post_name
                    post_thumbnail {
                        localFile {
                            childImageSharp {
                                square: resolutions(width: 500, height: 500) {
                                    src
                                    srcSet
                                }
                                rectangle: resolutions(width: 500, height: 340) {
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`