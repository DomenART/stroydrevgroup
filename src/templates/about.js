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
import AboutMenu from '../components/About/AboutMenu'

class Page extends Component {
    render() {
        const { breadcrumbs, options } = this.props.pathContext
        const { page } = this.props.data

        return (
            <Layout>
                <Head title={page.title} />
                <PageMain>
                    <PageHeader />
                </PageMain>
                <AboutMain>
                    <Breadcrumbs items={breadcrumbs} />
                    <PageTitle html={page.title} />
                    <div className="uk-grid uk-grid-small" data-uk-grid>
                        <div className="uk-width-1-2">
                            <AboutMenu items={this.props.about} />
                        </div>
                        <div className="uk-width-1-2">
                        </div>
                        <div className="uk-width-1-2">
                        </div>
                        <div className="uk-width-1-2">
                            <div className="uk-grid uk-grid-small" data-uk-grid>
                                <div className="uk-width-1-2">
                                </div>
                                <div className="uk-width-1-2">
                                </div>
                                <div className="uk-width-1-2">
                                </div>
                                <div className="uk-width-1-2">
                                </div>
                            </div>
                        </div>
                    </div>
                </AboutMain>
                <PagegQuestions />
            </Layout>
        )
    }
}

export default connect(
    state => ({
        about: state.menu.about
    })
)(Page)

export const query = graphql`
    query aboutPageQuery($id: String!) {
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
