import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import urlParse from 'url-parse'
import styles from './Sitemap.module.sass'

class Sitemap extends Component {
    render() {
        const { menu, articles, projects } = this.props

        return (
            <div className={styles.sitemap}>
                <div className="uk-grid" data-uk-grid="masonry: true">
                    <div className="uk-width-1-2@m">
                        <ul>
                            {menu.about.map(row => (
                                <li key={row.key}>
                                    <Link to={row.slug}>
                                        <span dangerouslySetInnerHTML={{__html:row.title}} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="uk-width-1-2@m">
                        <ul>
                            {menu.catalog.map(row => (
                                <li key={row.key}>
                                    <Link to={row.slug}>
                                        <span dangerouslySetInnerHTML={{__html:row.title}} />
                                    </Link>
                                    {row.children && (
                                        <ul>
                                            {row.children.map(row => (
                                                <li key={row.key}>
                                                    <Link to={row.slug}>
                                                        <span dangerouslySetInnerHTML={{__html:row.title}} />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="uk-width-1-2@m">
                        <ul>
                            <li>
                                <Link to="/category/polezno-znat">Полезно знать</Link>
                            </li>
                            <ul>
                                {articles.edges.map(row => (
                                    <li key={row.node.id}>
                                        <Link to={urlParse(row.node.link).pathname}>
                                            <span dangerouslySetInnerHTML={{__html:row.node.title}} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                    <div className="uk-width-1-2@m">
                        <ul>
                            <li>
                                <Link to="/katalog">Каталог проектов</Link>
                            </li>
                            <ul>
                                {projects.edges.map(row => (
                                    <li key={row.node.id}>
                                        <Link to={urlParse(row.node.link).pathname}>
                                            <span dangerouslySetInnerHTML={{__html:row.node.title}} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        menu: state.menu
    })
)(Sitemap)