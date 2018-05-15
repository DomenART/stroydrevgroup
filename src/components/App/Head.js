import React, { Component } from 'react'
import Helmet from 'react-helmet'
import './App.sass'

class Head extends Component {
    render() {
        return (
            <Helmet>
                <html lang="ru" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="cmsmagazine" content="ef9002bde22164e1bb8ca1b1793cf47b" />
                <title>{this.props.title}</title>
            </Helmet>
        )
    }
}

export default Head
