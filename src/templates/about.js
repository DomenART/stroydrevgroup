import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader'
import PageMain from '../components/Page/PageMain'
import PageTitle from '../components/Page/PageTitle'
import PageContent from '../components/Page/PageContent'
import PageQuestions from '../components/Page/PageQuestions'
import Breadcrumbs from '../components/UI/Breadcrumbs'
import AboutMain from '../components/About/AboutMain'
import AboutGridExtraSmall from '../components/About/AboutGridExtraSmall'
import AboutGridSmall from '../components/About/AboutGridSmall'
import AboutGridMedium from '../components/About/AboutGridMedium'
import AboutGridLarge from '../components/About/AboutGridLarge'
import AboutGrid from '../components/About/AboutGrid'

class Page extends Component {
    getGrid() {
        const { page } = this.props.data
        const { isExtraSmallMax, isSmall, isMedium, isLarge } = this.props.resolution

        if (isExtraSmallMax) {
            return (
                <AboutGridExtraSmall
                    page={page}
                    menu={this.props.about}
                />
            )
        }

        if (isLarge) {
            return (
                <AboutGridLarge
                    page={page}
                    menu={this.props.about}
                />
            )
        }

        if (isMedium) {
            return (
                <AboutGridMedium
                    page={page}
                    menu={this.props.about}
                />
            )
        }

        if (isSmall) {
            return (
                <AboutGridSmall
                    page={page}
                    menu={this.props.about}
                />
            )
        }
    }

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
                </PageMain>
                <AboutMain>
                    <Breadcrumbs items={breadcrumbs} />
                    <PageTitle html={page.title} />
                    {/* <AboutGrid
                        page={page}
                        menu={this.props.about}
                    /> */}
                    {this.getGrid()}
                    {/* <div className="uk-grid uk-grid-small" data-uk-grid>
                        <div className="uk-width-3-4@m uk-width-1-2@l">
                            <AboutMenu items={menu} />
                        </div>
                        <div className="uk-width-1-2@l">
                        </div>
                        <div className="uk-width-1-2@l">
                            <AboutIntro
                                title={page.acf.intro_title}
                                text={page.acf.intro_text}
                                media={page.acf.intro_media}
                            />
                        </div>
                        <div className="uk-width-1-2@l">
                            <div className="uk-grid uk-grid-small" data-uk-grid>
                                <div className="uk-width-1-2@s uk-width-1-3@m uk-width-1-2@l">
                                    <AboutDate />
                                </div>
                                <div className="uk-width-1-2@s uk-width-1-3@m uk-width-1-2@l">
                                    <AboutProduction />
                                </div>
                                <div className="uk-width-1-2@s uk-width-1-3@m uk-width-1-2@l">
                                    <AboutProjects />
                                </div>
                                <div className="uk-width-1-2@s uk-width-1-3@m uk-width-1-2@l">
                                    <AboutTechnologies />
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@l">
                            <AboutServices />
                        </div>
                        <div className="uk-width-1-2@l">
                            <AboutPhotos />
                        </div>
                        <div className="uk-width-1-2@l">
                            <AboutContent text={page.content} />
                        </div>
                        <div className="uk-width-1-2@l">
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
                            </div>
                        </div>
                        <div className="uk-width-1-2@l">
                            <AboutConsultation />
                        </div>
                        <div className="uk-width-1-2@l">
                            <div className="uk-grid uk-grid-small" data-uk-grid>
                                <div className="uk-width-1-2">
                                    <AboutInstagram />
                                </div>
                                <div className="uk-width-1-2">
                                    <AboutFacebook />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </AboutMain>
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

export default connect(
    state => ({
        about: state.menu.about,
        resolution: state.resolution
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
                content_page {
                    ...FlexibleFields
                }
            }
        }
    }
`