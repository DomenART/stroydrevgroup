import React, { Component, Fragment } from 'react'
import { Context } from './FilterContext'
import Paginate from '../UI/Paginate'
import queryString from 'jquery-param'
import FilterHeadline from './FilterHeadline'
import FilterOuter from './FilterOuter'
import ProjectsTile from '../Projects/ProjectsTile'
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
        this.resetFilters = this.resetFilters.bind(this)
        this.state = {
            loadingProjects: false,
            total: 0,
            totalPages: 0,
            view: 'tile',
            projects: [],
            filters: JSON.parse(JSON.stringify(this.props.filters)),
            query: {
                page: 1,
                per_page: 24,
                orderby: 'menu_order',
                order: 'asc',
                filter: {
                    meta_query: {relation: 'AND'}
                }
            },
            actions: {
                updateMetaQuery: this.updateMetaQuery,
                loadProjects: this.loadProjects,
                changeOrder: this.changeOrder,
                changeLimit: this.changeLimit,
                changeView: this.changeView,
                resetFilters: this.resetFilters,
            }
        }
    }

    componentDidMount() {
        this.initialLoad()
    }

    changeOrder(order) {
        this.setState({
            query: {
                ...this.state.query,
                ...order
            }
        }, this.loadProjects)
    }

    changeLimit(limit) {
        this.setState({
            query: {
                ...this.state.query,
                page: 1,
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
        this.setState({ loadingProjects: true }, () => {
            fetch(`${config.API_URL}wp/v2/project?${queryString(this.state.query)}`)
            .then(response => {
                this.setState({
                    total: Number(response.headers.get('x-wp-total')),
                    totalPages: Number(response.headers.get('x-wp-totalpages'))
                })
                return response.json()
            })
            .then(projects => {
                this.setState({
                    loadingProjects: false,
                    projects
                })
            })
        })
    }

    disableEmptyFilters() {
        this.props.filters.forEach((group, gIndex) => {
            group.values.forEach((filter, fIndex) => {
                const query = {
                    ...this.state.query,
                    per_page: 1,
                    filter: {
                        ...this.state.query.filter,
                        meta_query: {
                            ...this.state.query.filter.meta_query,
                            [group.name]: {
                                [fIndex]: {
                                    key: group.name,
                                    value: filter.value,
                                    compare: filter.compare,
                                    type: filter.type
                                }
                            }
                        }
                    }
                }
                fetch(`${config.API_URL}wp/v2/project?${queryString(query)}`)
                .then(response => response.json())
                .then(response => {
                    let filters = [...this.state.filters]
                    if (!filters[gIndex]['values'][fIndex].active) {
                        filters[gIndex]['values'][fIndex].disabled = response.length === 0
                    }
                    this.setState({ filters })
                })
            })
        })
    }

    resetFilters() {
        this.setState({ filters: JSON.parse(JSON.stringify(this.props.filters)) })
        this.updateMetaQuery(this.initialQuery)
    }

    initialLoad() {
        this.initialQuery = {}
        this.props.filters.forEach(group => {
            this.initialQuery[group.name] = {relation: 'OR'}
            group.values.forEach((filter, index) => {
                if (filter.active) {
                    this.initialQuery[group.name][index] = {
                        key: group.name,
                        value: filter.value,
                        compare: filter.compare,
                        type: filter.type
                    }
                }
            })
        })
        this.updateMetaQuery(this.initialQuery)
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
                <div className={styles.container}>
                    {this.state.loadingProjects && (
                        <div className={styles.loader}>
                            <div data-uk-spinner="ratio: 3" />
                        </div>
                    )}
                    {this.state.view == 'tile' ? (
                        <div className="uk-grid uk-grid-small" data-uk-grid>
                            {this.state.projects.map(row => (
                                <div
                                    className="uk-width-1-2@s uk-width-1-3@m uk-width-1-4@xl"
                                    key={row.id}
                                >
                                    <ProjectsTile
                                        title={row.title.rendered}
                                        slug={row.slug}
                                        image={row.thumbnail}
                                        {...row.acf}
                                    />
                                </div>
                            ))}
                        </div>
                    ) :
                        this.state.projects.map(row => (
                            <div key={row.id}>
                                <ProjectsRow
                                    title={row.title.rendered}
                                    slug={row.slug}
                                    image={row.thumbnail}
                                    {...row.acf}
                                />
                            </div>
                        ))
                    }
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