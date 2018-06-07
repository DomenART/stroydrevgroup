import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader.js'
import PageMain from '../components/Page/PageMain.js'
import PageTitle from '../components/Page/PageTitle.js'
import PageContent from '../components/Page/PageContent.js'
import PagegQuestions from '../components/Page/PagegQuestions.js'
import Breadcrumbs from '../components/UI/Breadcrumbs'
import AboutMain from '../components/About/AboutMain'
import ReviewsList from '../components/Reviews/ReviewsList'
import ReviewsDetail from '../components/Reviews/ReviewsDetail'

class Page extends Component {
    render() {
        const { breadcrumbs } = this.props.pathContext
        const { page, reviews } = this.props.data

        return (
            <Layout>
                <Head title={page.title} />
                <PageMain>
                    <PageHeader />
                </PageMain>
                <AboutMain>
                    <Breadcrumbs items={breadcrumbs} />
                    <PageTitle html={page.title} />
                    <ReviewsList />
                </AboutMain>
                {(page.content || page.acf.content_page) && (
                    <PageContent
                        content={page.content}
                        flexible={page.acf.content_page}
                    />
                )}
                <PagegQuestions />
                {this.props.location.hash && (
                    <ReviewsDetail id={this.props.location.hash.substr(1)} />
                )}
            </Layout>
        )
    }
}

export default Page

export const query = graphql`
    query reviewsPageQuery($id: String!) {
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