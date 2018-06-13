import React, { Component } from 'react'
import Helmet from 'react-helmet'
import './App.sass'

class Head extends Component {
    render() {
        const { title, seo_title, seo_keywords, seo_description } = this.props

        return (
            <Helmet>
                <html lang="ru" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="cmsmagazine" content="ef9002bde22164e1bb8ca1b1793cf47b" />
                <meta name="keywords" content={seo_keywords} />
                <meta name="description" content={seo_description} />
                <title>{seo_title || title}</title>
            </Helmet>
        )
    }
}

export default Head
