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
    setInitialData,
    setPaginatePage,
    setLimit,
    setOrder,
    loadProjects,
    updateFilters,
    disableEmptyFilters,
} from '../../state/actions/catalog';

class CatalogFilter extends Component {
    constructor(props) {
        super(props)

        this.initialData = {
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
                    meta_query: this.prepareQueryFilters(),
                }
            }
        }

        this.setInitialData = this.props.setInitialData.bind(this, this.props.page_id, this.initialData)
        this.setPaginatePage = this.props.setPaginatePage.bind(this, this.props.page_id)
        this.setLimit = this.props.setLimit.bind(this, this.props.page_id)
        this.setOrder = this.props.setOrder.bind(this, this.props.page_id)
        this.updateFilters = this.props.updateFilters.bind(this, this.props.page_id)

        if (!this.props.pages[this.props.page_id]) {
            this.setInitialData()
        }
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

    prepareQueryFilters() {
        const meta_query = {relation: 'AND'}
        this.props.filters.forEach(group => {
            meta_query[group.name] = {}
            group.values.forEach((row, index) => {
                if (row.active) {
                    meta_query[group.name][index] = {
                        key: group.name,
                        value: row.value,
                        compare: row.compare,
                        type: row.type
                    }
                }
            })
            if (Object.keys(meta_query[group.name]).length) {
                meta_query[group.name].ralation = 'OR'
            }
        })
        return meta_query
    }

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
                    onReset={this.setInitialData}
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
                            <ProjectsRow
                                title={row.title.rendered}
                                slug={row.slug}
                                image={row.thumbnail}
                                key={row.id}
                                {...row.acf}
                            />
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
    setInitialData: (page, data) => dispatch(setInitialData(page, data)),
    loadProjects: (page) => dispatch(loadProjects(page)),
    setPaginatePage: (page, payload) => dispatch(setPaginatePage(page, payload)),
    updateFilters: (page, name, values) => dispatch(updateFilters(page, name, values)),
    disableEmptyFilters: (page) => dispatch(disableEmptyFilters(page)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogFilter)