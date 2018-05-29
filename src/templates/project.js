import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader.js'
import PageMain from '../components/Page/PageMain.js'
import PageTitle from '../components/Page/PageTitle.js'
import PageContent from '../components/Page/PageContent.js'
import Breadcrumbs from '../components/UI/Breadcrumbs'
import ProjectGallery from '../components/Project/ProjectGallery'
import ProjectHeadline from '../components/Project/ProjectHeadline'
import ProjectPrice from '../components/Project/ProjectPrice'
import ProjectDimensions from '../components/Project/ProjectDimensions'
import ProjectParams from '../components/Project/ProjectParams'
import ProjectNotes from '../components/Project/ProjectNotes'
import ProjectMain from '../components/Project/ProjectMain'
import ProjectInfo from '../components/Project/ProjectInfo'

class Page extends Component {
    render() {
        const { breadcrumbs, neighbors } = this.props.pathContext
        const { page } = this.props.data

        return (
            <Layout>
                <Head title={page.title} />
                <PageMain>
                    <PageHeader />
                    <Breadcrumbs items={breadcrumbs} />
                    <ProjectMain>
                        <div className="uk-grid uk-grid-medium" data-uk-grid>
                            <div className="uk-width-1-2@l">
                                <PageTitle html={page.title} />
                            </div>

                            <div className="uk-width-1-2@l">
                                <ProjectHeadline neighbors={neighbors} />
                            </div>

                            <div className="uk-width-1-2@m">
                                {page.acf.gallery && <ProjectGallery rows={page.acf.gallery} />}
                            </div>

                            <div className="uk-width-1-2@m">
                                <ProjectPrice price={page.acf.price} />
                                <ProjectDimensions
                                    area={page.acf.area}
                                    length={page.acf.length}
                                    width={page.acf.width}
                                />
                                <ProjectParams params={{
                                    floors: page.acf.floors,
                                    bathrooms: page.acf.bathrooms,
                                    bedrooms: page.acf.bedrooms,
                                    boilerroom: page.acf.boilerroom,
                                    terrace: page.acf.terrace,
                                    basement: page.acf.basement,
                                    balcony: page.acf.balcony,
                                    garage: page.acf.garage,
                                    first_floor_height: page.acf.first_floor_height,
                                    second_floor_height: page.acf.second_floor_height,
                                    roof: page.acf.roof,
                                }} />
                                {page.acf.notes && <ProjectNotes notes={page.acf.notes} />}
                            </div>
                        </div>
                    </ProjectMain>
                    {(page.acf.additional || page.acf.equipments) && (
                        <ProjectInfo
                            additional={page.acf.additional}
                            equipments={page.acf.equipments}
                        />
                    )}
                </PageMain>
                {(page.content || page.acf.content_project) && (
                    <PageContent
                        content={page.content}
                        flexible={page.acf.content_project}
                    />
                )}
            </Layout>
        )
    }
}

export default Page

export const pageQuery = graphql`
    query projectPageQuery($id: String!) {
        page: wordpressWpProject(id: { eq: $id }) {
            title
            content
            date(formatString: "MMMM DD, YYYY")
            acf {
                seo_title
                seo_keywords
                seo_description
                price
                area
                length
                width
                notes
                floors
                bathrooms
                bedrooms
                boilerroom
                terrace
                basement
                balcony
                garage
                first_floor_height
                second_floor_height
                roof
                additional
                equipments {
                    name
                    description
                }
                gallery {
                    id
                    title
                    localFile {
                        publicURL
                        childImageSharp {
                            medium: resize(width: 800, height: 600) {
                                src
                                width
                            }
                            small: resize(width: 480, height: 360) {
                                src
                                width
                            }
                            thumb: resize(width: 220, height: 165) {
                                src
                                width
                            }
                        }
                    }
                }
                content_project {
                    ...FlexibleFields
                }
            }
        }
    }
`