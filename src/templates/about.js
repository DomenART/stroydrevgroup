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
import AboutIntro from '../components/About/AboutIntro'
import AboutDate from '../components/About/AboutDate'
import AboutProduction from '../components/About/AboutProduction'
import AboutProjects from '../components/About/AboutProjects'
import AboutTechnologies from '../components/About/AboutTechnologies'
import AboutServices from '../components/About/AboutServices'
import AboutPhotos from '../components/About/AboutPhotos'
import AboutContent from '../components/About/AboutContent'
import AboutRewards from '../components/About/AboutRewards'
import AboutReviews from '../components/About/AboutReviews'
import AboutInfo from '../components/About/AboutInfo'
import AboutOdnoklassniki from '../components/About/AboutOdnoklassniki'
import AboutUseful from '../components/About/AboutUseful'
import AboutFacebook from '../components/About/AboutFacebook'
import AboutInstagram from '../components/About/AboutInstagram'

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
                            <AboutIntro
                                title={page.acf.intro_title}
                                text={page.acf.intro_text}
                                media={page.acf.intro_media}
                            />
                        </div>
                        <div className="uk-width-1-2">
                            <div className="uk-grid uk-grid-small" data-uk-grid>
                                <div className="uk-width-1-2">
                                    <AboutDate />
                                </div>
                                <div className="uk-width-1-2">
                                    <AboutProduction />
                                </div>
                                <div className="uk-width-1-2">
                                    <AboutProjects />
                                </div>
                                <div className="uk-width-1-2">
                                    <AboutTechnologies />
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2">
                            <AboutServices />
                        </div>
                        <div className="uk-width-1-2">
                            <AboutPhotos />
                        </div>
                        <div className="uk-width-1-2">
                            <AboutContent text={page.content} />
                        </div>
                        <div className="uk-width-1-2">
                            <div className="uk-grid uk-grid-small" data-uk-grid>
                                <div className="uk-width-1-2">
                                    <AboutRewards />
                                </div>
                                <div className="uk-width-1-2">
                                    <AboutReviews />
                                </div>
                                <div className="uk-width-1-">
                                    <AboutInfo
                                        title={page.acf.compare_title}
                                        text={page.acf.compare_text}
                                    />
                                </div>
                                <div className="uk-width-1-2">
                                    <AboutOdnoklassniki />
                                </div>
                                <div className="uk-width-1-2">
                                    <AboutUseful />
                                </div>
                                <div className="uk-width-1-2">
                                    <AboutInstagram />
                                </div>
                                <div className="uk-width-1-2">
                                    <AboutFacebook />
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
                intro_title
                intro_text
                intro_media {
                    mime_type
                    media_type
                    localFile {
                        publicURL
                    }
                }
                compare_title
                compare_text
            }
        }
    }
`
