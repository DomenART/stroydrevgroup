import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Paginate from '../UI/Paginate'
import FilterHeadline from './FilterHeadline'
import FilterOuter from './FilterOuter'
import ProjectsTile from '../Projects/ProjectsTile'
import ProjectsRow from '../Projects/ProjectsRow'
import styles from './CatalogFilter.module.sass'
import config from '../../config.json'
import {
    setView,
    setFilters,
    setInitialData,
    setPaginatePage,
    setLimit,
    setOrder,
    loadProjects,
    updateFilters,
    activateFilter,
    deactivateFilter,
} from '../../state/actions/catalog';

class CatalogFilter extends Component {
    constructor(props) {
        super(props)

        this.setInitialData = this.props.setInitialData.bind(this, this.props.page_id)
        this.setPaginatePage = this.props.setPaginatePage.bind(this, this.props.page_id)
        this.setLimit = this.props.setLimit.bind(this, this.props.page_id)
        this.setOrder = this.props.setOrder.bind(this, this.props.page_id)
        this.updateFilters = this.props.updateFilters.bind(this, this.props.page_id)
        this.activateFilter = this.props.activateFilter.bind(this, this.props.page_id)
        this.deactivateFilter = this.props.deactivateFilter.bind(this, this.props.page_id)

        if (!this.props.pages[this.props.page_id]) {
            this.setInitialData({
                loadingProjects: false,
                total: 0,
                totalPages: 0,
                projects: [],
                filters: this.prepareFilters(),
                query: {
                    page: 1,
                    per_page: 24,
                    orderby: 'menu_order',
                    order: 'asc',
                    filter: {
                        meta_query: {relation: 'AND'}
                    }
                }
            })
            // this.props.setQuery(this.props.page_id, {
            //     page: 1,
            //     per_page: 24,
            //     orderby: 'menu_order',
            //     order: 'asc',
            //     filter: {
            //         meta_query: {relation: 'AND'}
            //     }
            // })
        }

        // this.page_id = this.props.page_id

        // if (!this.props.pages[this.props.page_id]) {
        //     this.props.dispatch({
        //         type: 'SET_CATALOG_PAGE',
        //         page: this.props.page_id,
        //         payload: {
        //             filters: JSON.parse(JSON.stringify(this.props.filters)),
        //             query: {
        //                 page: 1,
        //                 per_page: 24,
        //                 orderby: 'menu_order',
        //                 order: 'asc',
        //                 filter: {
        //                     meta_query: {relation: 'AND'}
        //                 }
        //             }
        //         }
        //     })
        // }
        // когда меняем query загружаем projects и отключаем фильтры
        // action на замену projects
        // action на замену filters
        // action на замену query
            // вызывает loadProjects и action на замену projects
            // вызывает disableEmptyFilters и action на замену filters

        // this.updateMetaQuery = this.updateMetaQuery.bind(this)
        // this.loadProjects = this.loadProjects.bind(this)
        // this.pageChange = this.pageChange.bind(this)
        // this.changeOrder = this.changeOrder.bind(this)
        // this.changeLimit = this.changeLimit.bind(this)
        // this.changeView = this.changeView.bind(this)
        // this.resetFilters = this.resetFilters.bind(this)
        this.state = {
            // loadingProjects: false,
            // total: 0,
            // totalPages: 0,
            // projects: [],
            // view: 'tile',
            // filters: JSON.parse(JSON.stringify(this.props.filters)),
            // query: {
            //     page: 1,
            //     per_page: 24,
            //     orderby: 'menu_order',
            //     order: 'asc',
            //     filter: {
            //         meta_query: {relation: 'AND'}
            //     }
            // },
            // actions: {
            //     updateMetaQuery: this.updateMetaQuery,
            //     loadProjects: this.loadProjects,
            //     changeOrder: this.changeOrder,
            //     changeLimit: this.changeLimit,
            //     changeView: this.changeView,
            //     resetFilters: this.resetFilters,
            // }
        }
    }

    componentDidMount() {

        this.props.loadProjects(this.props.page_id)
        // this.page = this.props.pages[this.props.page]

        // this.initialLoad()
    }

    prepareFilters() {
        const filters = {}
        this.props.filters.forEach(group => {
            filters[group.name] = {}
            group.values.forEach((row, index) => {
                filters[group.name][index] = row
            })
        })
        return filters
    }

    // changeOrder(order) {
    //     this.setState({
    //         query: {
    //             ...this.state.query,
    //             ...order
    //         }
    //     }, this.loadProjects)
    // }

    // changeLimit(limit) {
    //     this.setState({
    //         query: {
    //             ...this.state.query,
    //             page: 1,
    //             per_page: limit
    //         }
    //     }, this.loadProjects)
    // }

    // changeView(view) {
    //     this.setState({
    //         view: view
    //     })
    // }

    // updateMetaQuery(obj) {
    //     this.setState({
    //         query: {
    //             ...this.state.query,
    //             page: 1,
    //             filter: {
    //                 ...this.state.query.filter,
    //                 meta_query: {
    //                     ...this.state.query.filter.meta_query,
    //                     ...obj
    //                 }
    //             }
    //         }
    //     }, () => {
    //         this.disableEmptyFilters()
    //         this.loadProjects()
    //     })
    // }

    // loadProjects() {
    //     this.setState({ loadingProjects: true }, () => {
    //         fetch(`${config.API_URL}wp/v2/project?${queryString(this.state.query)}`)
    //         .then(response => {
    //             this.setState({
    //                 total: Number(response.headers.get('x-wp-total')),
    //                 totalPages: Number(response.headers.get('x-wp-totalpages'))
    //             })
    //             return response.json()
    //         })
    //         .then(projects => {
    //             this.setState({
    //                 loadingProjects: false,
    //                 projects
    //             })
    //         })
    //     })
    // }

    // disableEmptyFilters() {
    //     this.props.filters.forEach((group, gIndex) => {
    //         group.values.forEach((filter, fIndex) => {
    //             const query = {
    //                 ...this.state.query,
    //                 per_page: 1,
    //                 filter: {
    //                     ...this.state.query.filter,
    //                     meta_query: {
    //                         ...this.state.query.filter.meta_query,
    //                         [group.name]: {
    //                             [fIndex]: {
    //                                 key: group.name,
    //                                 value: filter.value,
    //                                 compare: filter.compare,
    //                                 type: filter.type
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //             fetch(`${config.API_URL}wp/v2/project?${queryString(query)}`)
    //             .then(response => response.json())
    //             .then(response => {
    //                 let filters = [...this.state.filters]
    //                 if (!filters[gIndex]['values'][fIndex].active) {
    //                     filters[gIndex]['values'][fIndex].disabled = response.length === 0
    //                 }
    //                 this.setState({ filters })
    //             })
    //         })
    //     })
    // }

    // resetFilters() {
    //     this.setState({ filters: JSON.parse(JSON.stringify(this.props.filters)) })
    //     this.updateMetaQuery(this.initialQuery)
    // }

    initialLoad() {
        // console.log(this.props.pages[this.props.page_id])
        // this.initialQuery = {}
        // this.props.filters.forEach(group => {
        //     this.initialQuery[group.name] = {relation: 'OR'}
        //     group.values.forEach((filter, index) => {
        //         if (filter.active) {
        //             this.initialQuery[group.name][index] = {
        //                 key: group.name,
        //                 value: filter.value,
        //                 compare: filter.compare,
        //                 type: filter.type
        //             }
        //         }
        //     })
        // })
        // this.updateMetaQuery(this.initialQuery)
    }

    // pageChange({ selected }) {
    //     this.setState({
    //         query: {
    //             ...this.state.query,
    //             page: ++selected
    //         }
    //     }, this.loadProjects)
    // }

    render() {
        if (!this.props.pages[this.props.page_id]) {
            return (
                <div className={styles.loader}>
                    <div data-uk-spinner="ratio: 3" />
                </div>
            )
        }

        const {
            total,
            totalPages,
            loadingProjects,
            projects,
            filters,
            query
        } = this.props.pages[this.props.page_id]

        return (
            <Fragment>
                <FilterHeadline
                    setLimit={this.setLimit}
                    setOrder={this.setOrder}
                    setView={this.props.setView}
                    view={this.props.view}
                    total={total}
                    page={query.page}
                    per_page={query.per_page}
                    orderBy={query.orderby}
                    orderDir={query.order}
                />
                <FilterOuter
                    filters={filters}
                    updateFilters={this.updateFilters}
                    activateFilter={this.activateFilter}
                    deactivateFilter={this.deactivateFilter}
                />
                <div className={styles.container}>
                    {loadingProjects && (
                        <div className={styles.loader}>
                            <div data-uk-spinner="ratio: 3" />
                        </div>
                    )}
                    {projects && (this.props.view == 'tile' ? (
                        <div className="uk-grid uk-grid-small" data-uk-grid>
                            {projects.map(row => (
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
                    ) : (
                        projects.map(row => (
                            <div key={row.id}>
                                <ProjectsRow
                                    title={row.title.rendered}
                                    slug={row.slug}
                                    image={row.thumbnail}
                                    {...row.acf}
                                />
                            </div>
                        ))
                    ))}
                    {totalPages > 1 ? (
                        <Paginate
                            onChange={this.setPaginatePage}
                            total={totalPages}
                        />
                    ) : <Fragment />}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    view: state.catalog.view,
    pages: state.catalog.pages,
})

const mapDispatchToProps = (dispatch) => ({
    setView: (view) => dispatch(setView(view)),
    setOrder: (page, order) => dispatch(setOrder(page, order)),
    setLimit: (page, number) => dispatch(setLimit(page, number)),
    setFilters: (page, filters) => dispatch(setFilters(page, filters)),
    setInitialData: (page, data) => dispatch(setInitialData(page, data)),
    loadProjects: (page) => dispatch(loadProjects(page)),
    setPaginatePage: (page, payload) => dispatch(setPaginatePage(page, payload)),
    updateFilters: (page, name, values) => dispatch(updateFilters(page, name, values)),
    activateFilter: (page, name, key) => dispatch(activateFilter(page, name, key)),
    deactivateFilter: (page, name, key) => dispatch(deactivateFilter(page, name, key)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogFilter)