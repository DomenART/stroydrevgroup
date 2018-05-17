import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import FooterFixed from './FooterFixed'
import FooterStatic from './FooterStatic'
import FooterMobile from './FooterMobile'
import SvgIcon from '../UI/SvgIcon'

class Footer extends Component {
    render() {
        const { counters, copyright } = this.props

        return (
            <footer>
                <FooterFixed />
                <FooterMobile
                    copyright={copyright}
                />
                <FooterStatic
                    counters={counters}
                />
            </footer>
        )
    }
}

export default connect(
    state => ({
        copyright: state.app.options.copyright,
        counters: state.app.options.counters
    })
)(Footer)
