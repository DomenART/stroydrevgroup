import React, { Component, Fragment } from 'react'
import { Context, filters } from './FilterContext'
import Paginate from '../UI/Paginate'
import queryString from 'jquery-param'
import FilterHeadline from './FilterHeadline'
import FilterOuter from './FilterOuter'
import ProjectsRow from '../Projects/ProjectsRow'
import styles from './CatalogFilter.module.sass'
import config from '../../config.json'

class CatalogFilter extends Component {
    constructor(props) {
        super(props)
        this.updateMetaQuery = this.updateMetaQuery.bind(this)
        this.loadProjects = this.loadProjects.bind(this)
        this.pageChange = this.pageChange.bind(this)
        this.changeOrder = this.changeOrder.bind(this)
        this.changeLimit = this.changeLimit.bind(this)
        this.changeView = this.changeView.bind(this)
        this.state = {
            total: 0,
            totalPages: 0,
            view: 'tile',
            projects: [],
            filters: filters,
            query: {
                page: 1,
                per_page: 1,
                orderby: 'menu_order',
                filter: {
                    meta_query: {}
                }
            },
            actions: {
                updateMetaQuery: this.updateMetaQuery,
                loadProjects: this.loadProjects,
                changeOrder: this.changeOrder,
                changeLimit: this.changeLimit,
                changeView: this.changeView,
            }
        }
    }

    changeOrder(order) {
        this.setState({
            query: {
                ...this.state.query,
                orderby: order
            }
        }, this.loadProjects)
    }

    changeLimit(limit) {
        this.setState({
            query: {
                ...this.state.query,
                per_page: limit
            }
        }, this.loadProjects)
    }

    changeView(view) {
        this.setState({
            view: view
        })
    }

    updateMetaQuery(obj) {
        this.setState({
            query: {
                ...this.state.query,
                page: 1,
                filter: {
                    ...this.state.query.filter,
                    meta_query: {
                        ...this.state.query.filter.meta_query,
                        ...obj
                    }
                }
            }
        }, () => {
            this.disableEmptyFilters()
            this.loadProjects()
        })
    }

    loadProjects() {
        fetch(`${config.API_URL}wp/v2/project?${queryString(this.state.query)}`)
        .then(response => {
            this.setState({
                total: Number(response.headers.get('x-wp-total')),
                totalPages: Number(response.headers.get('x-wp-totalpages'))
            })
            return response.json()
        })
        .then(response => {
            this.setState({
                projects: response
            })
        })
    }

    disableEmptyFilters() {
        this.state.filters.forEach((filter, index) => {
            const query = {
                ...this.state.query,
                per_page: 1,
                filter: {
                    ...this.state.query.filter,
                    meta_query: {
                        ...this.state.query.filter.meta_query,
                        [filter.group]: {
                            key: filter.name,
                            value: filter.value,
                            compare: filter.compare,
                            type: filter.type
                        }
                    }
                }
            }
            fetch(`${config.API_URL}wp/v2/project?${queryString(query)}`)
            .then(response => response.json())
            .then(response => {
                const filters = this.state.filters
                if (!filters[index].active) {
                    filters[index].disabled = response.length === 0
                }
                this.setState({ filters })
            })
        })
    }

    componentDidMount() {
        // this.initialLoad()
        // this.loadProjects()
    }

    pageChange({ selected }) {
        this.setState({
            query: {
                ...this.state.query,
                page: ++selected
            }
        }, this.loadProjects)
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                <FilterHeadline />
                <FilterOuter />
                <div className={styles.projects}>
                    <div className="uk-grid uk-grid-small" data-uk-grid>
                        {this.state.projects.map(row => (
                            <div
                                className="uk-width-1-2@s uk-width-1-3@m uk-width-1-4@xl"
                                key={row.id}
                            >
                                <ProjectsRow
                                    title={row.title.rendered}
                                    slug={row.slug}
                                    image={row.thumbnail}
                                    {...row.acf}
                                />
                            </div>
                        ))}
                    </div>
                    {this.state.totalPages > 1 ? (
                        <Paginate
                            onChange={this.pageChange}
                            total={this.state.totalPages}
                        />
                    ) : <Fragment />}
                </div>
            </Context.Provider>
        )
    }
}

export default CatalogFilter