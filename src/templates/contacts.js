import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from '../components/App/Layout'
import Head from '../components/App/Head'
import PageHeader from '../components/Page/PageHeader'
import PageMain from '../components/Page/PageMain'
import PageTitle from '../components/Page/PageTitle'
import PageContent from '../components/Page/PageContent'
import PageQuestions from '../components/Page/PageQuestions'
import ContactsGroups from '../components/Contacts/ContactsGroups'
import ContactsSocial from '../components/Contacts/ContactsSocial'
import Breadcrumbs from '../components/UI/Breadcrumbs'

class Page extends Component {
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
                    <Breadcrumbs items={breadcrumbs} />
                    <PageTitle html={page.title} />
                    <ContactsGroups groups={page.acf.contacts} />
                    <ContactsSocial />
                </PageMain>
                <PageQuestions />
            </Layout>
        )
    }
}

export default Page

export const query = graphql`
    query contactsPageQuery($id: String!) {
        page: wordpressPage(id: { eq: $id }) {
            title
            content
            date(formatString: "MMMM DD, YYYY")
            acf {
                seo_title
                seo_keywords
                seo_description
                contacts {
                    title
                    map
                    contacts {
                        name
                        comment
                        add
                        icon
                        text
                    }
                }
            }
        }
    }
`
