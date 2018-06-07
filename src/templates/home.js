import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import Header from '../components/Header/Header.js'
import LandingSlideshow from '../components/Landing/LandingSlideshow'
import LandingBanners from '../components/Landing/LandingBanners'
import LandingProjects from '../components/Landing/LandingProjects'
import LandingChoice from '../components/Landing/LandingChoice'
import LandingTasks from '../components/Landing/LandingTasks'
import LandingHouseAdvantages from '../components/Landing/LandingHouseAdvantages'
import LandingOurAdvantages from '../components/Landing/LandingOurAdvantages'
import LandingReviews from '../components/Landing/LandingReviews'
import LandingScheme from '../components/Landing/LandingScheme'
import LandingSocial from '../components/Landing/LandingSocial'
import LandingQuestions from '../components/Landing/LandingQuestions'
import LandingContacts from '../components/Landing/LandingContacts'
import Flexible from '../components/Flexible/Flexible'
import styles from './home.module.sass'

class Page extends Component {

    render() {
        const { page, reviews } = this.props.data

        return (
            <Layout>
                <Head title={page.title} />
                <div className="padding-small">
                    <Header />
                    <LandingSlideshow items={page.acf.slideshow_items} />
                    <LandingBanners />
                    <LandingProjects />
                </div>
                <LandingTasks items={page.acf.tasks_list} />
                <LandingChoice
                    title={page.acf.choice_title}
                    text={page.acf.choice_text}
                />
                <LandingHouseAdvantages
                    title={page.acf.houses_advantages_title}
                    items={page.acf.houses_advantages_list}
                />
                <div className={styles.sectionWarm}>
                    <h1
                        className={styles.title}
                        dangerouslySetInnerHTML={{ __html: page.title }}
                    />
                    <div
                        className={styles.container}
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    />
                    <Flexible rows={page.acf.content_page} />
                    <div className="uk-grid" data-uk-grid>
                        <div className={`${styles.aboutAdvantages} uk-width-1-2@l`}>
                            <LandingOurAdvantages
                                title={page.acf.our_advantages_title}
                                items={page.acf.our_advantages_list}
                            />
                        </div>
                        <div className="uk-width-1-2@l">
                            <LandingReviews
                                title={`Отзывы наших клиентов`}
                                items={reviews}
                            />
                        </div>
                    </div>
                </div>
                <LandingScheme
                    title={page.acf.scheme_title}
                    items={page.acf.scheme_list}
                />
                <LandingSocial />
                <LandingQuestions />
                <LandingContacts />
            </Layout>
        )
    }
}

export default Page

export const query = graphql`
    query homePageQuery($id: String!) {
        page: wordpressPage(id: { eq: $id }) {
            title
            content
            date(formatString: "MMMM DD, YYYY")
            acf {
                seo_title
                seo_keywords
                seo_description
                choice_title
                choice_text
                tasks_list {
                    title
                }
                houses_advantages_title
                houses_advantages_list {
                    title
                    desc
                    image {
                        localFile {
                            publicURL
                        }
                    }
                }
                our_advantages_title
                our_advantages_list {
                    title
                    desc
                    image {
                        localFile {
                            publicURL
                        }
                    }
                }
                scheme_title
                scheme_list {
                    text
                    text_small
                    image {
                        localFile {
                            publicURL
                        }
                    }
                }
                slideshow_items {
                    title
                    image {
                        alt_text
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 4000) {
                                    originalImg
                                    srcSet
                                }
                            }
                        }
                    }
                    desc
                    price
                }
                content_page {
                    ...FlexibleFields
                }
            }
        }
        reviews: allWordpressWpReviews {
            edges {
                node {
                    wordpress_id
                    slug
                    title
                    content
                    acf {
                        name
                        date
                        address
                        links {
                            link
                        }
                        media {
                            mime_type
                            media_type
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    }
`
