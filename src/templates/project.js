import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
// const WPAPI = require(`wpapi`)

class Page extends Component {
    state = {
        feedbackModalVisible: false
    }
    
    showFeedbackModal = () => {
        this.setState({
            feedbackModalVisible: true
        })
    }

    hideFeedbackModal = () => {
        this.setState({
            feedbackModalVisible: false
        })
    }

    render() {
        const currentPage = this.props.data.wordpressWpProject

        return (
            <Layout title={currentPage.title}>
                <Head title={currentPage.title} />
                <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
                <div dangerouslySetInnerHTML={{ __html: currentPage.date }} />
                <Link to="/">Link</Link>
            </Layout>
        )
    }
}

export default Page

export const pageQuery = graphql`
    query currentProjectQuery($id: String!) {
        wordpressWpProject(id: { eq: $id }) {
            title
            content
            date(formatString: "MMMM DD, YYYY")
        }
    }
`