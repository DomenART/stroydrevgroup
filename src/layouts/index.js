import React, { Component } from 'react'
import { connect } from 'react-redux'
import prepareMenu from '../utils/prepareMenu'

class Layout extends Component {
    componentWillMount() {
        this.props.dispatch({
            type: 'MENU_LOAD_ABOUT',
            payload: prepareMenu(this.props.data.about.items)
        })
        this.props.dispatch({
            type: 'MENU_LOAD_SIDE_FIRST',
            payload: prepareMenu(this.props.data.side_first.items)
        })
        this.props.dispatch({
            type: 'MENU_LOAD_SIDE_SECOND',
            payload: prepareMenu(this.props.data.side_second.items)
        })
        this.props.dispatch({
            type: 'MENU_LOAD_CATALOG',
            payload: prepareMenu(this.props.data.catalog.items)
        })
        this.props.dispatch({
            type: 'MENU_LOAD_FOOTER',
            payload: prepareMenu(this.props.data.footer.items)
        })
        this.props.dispatch({
            type: 'SET_OPTIONS',
            payload: this.props.data.options
        })
        this.props.dispatch({
            type: 'SET_PATHNAME',
            payload: this.props.location.pathname
        })
    }

    render() {
        return this.props.children()
    }
}

export default connect()(Layout)

export const query = graphql`
    fragment menuFields on wordpress__wp_api_menus_menus_items {
        slug
        items {
            title
            url
            object_id
            wordpress_children {
                title
                url
                object_id
            }
        }
    }

    query layoutQuery {
        catalog: wordpressWpApiMenusMenusItems(wordpress_id: {eq: 2}) {
            ...menuFields
        }
        about: wordpressWpApiMenusMenusItems(wordpress_id: {eq: 14}) {
            ...menuFields
        }
        side_second: wordpressWpApiMenusMenusItems(wordpress_id: {eq: 4}) {
            ...menuFields
        }
        side_first: wordpressWpApiMenusMenusItems(wordpress_id: {eq: 3}) {
            ...menuFields
        }
        footer: wordpressWpApiMenusMenusItems(wordpress_id: {eq: 5}) {
            ...menuFields
        }
        options: wordpressAcfOptions {
            email
            phone
            copyright
            geography
            counters
            have_questions
            contacts_footer {
                name
                comment
                add
                icon
                text
            }
        }
    }
`
