import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Paginate from '../UI/Paginate'
import FilterHeadline from '../Filter/FilterHeadline'
import FilterOuter from '../Filter/FilterOuter'
import ProjectsTile from '../Projects/ProjectsTile'
import ProjectsRow from '../Projects/ProjectsRow'
import FilterSelect from '../Filter/FilterSelect'
import FilterOptions from '../Filter/FilterOptions'
import SvgIcon from '../UI/SvgIcon'
import styles from './CatalogFilter.module.sass'
import {
    setView,
    setInitialData,
    setPaginatePage,
    setLimit,
    setOrder,
    loadData,
    updateFilters,
    disableEmptyFilters,
} from '../../state/actions/filter';

class CatalogFilter extends Component {
    constructor(props) {
        super(props)

        this.initialData = {
            endpoint: 'project',
            loadingData: false,
            total: 0,
            totalPages: 0,
            rows: [],
            tags: [],
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

    getFilterOptions(name) {
        const { filters } = this.props.pages[this.props.page_id]
        const options = {}
        Object.keys(filters[name]).forEach(key => {
            options[key] = filters[name][key].title
        })
        return options
    }

    getActiveOptions(name) {
        const { filters } = this.props.pages[this.props.page_id]
        const options = []
        Object.keys(filters[name]).forEach(key => {
            if (filters[name][key].active) {
                options.push(key)
            }
        })
        return options
    }

    getDisabledOptions(name) {
        const { filters } = this.props.pages[this.props.page_id]
        const options = []
        Object.keys(filters[name]).forEach(key => {
            if (filters[name][key].disabled) {
                options.push(key)
            }
        })
        return options
    }

    optionsChange(name, values) {
        const { filters } = this.props.pages[this.props.page_id]
        const update = {}
        Object.keys(filters[name]).forEach(key => {
            update[key] = {
                active: values.indexOf(key) != -1
            }
        })
        this.updateFilters(name, update)
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
            loadingData,
            rows,
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
                {/* <FilterOuter
                    filters={filters}
                    updateFilters={this.updateFilters}
                    onReset={this.setInitialData}
                /> */}
                <div className={styles.filter}>
                    <div className={styles.title}>
                        Выберите<br />
                        подходящие параметры:
                    </div>
                    <div className={styles.filters}>
                        <div className={styles.group}>
                            <div className={styles.label}>
                                Тип строения:
                            </div>
                            <FilterSelect
                                placeholder="Все типы"
                                name="type"
                                disabled={this.getDisabledOptions('type')}
                                active={this.getActiveOptions('type')}
                                options={this.getFilterOptions('type')}
                                onChange={this.optionsChange.bind(this, 'type')}
                            />
                        </div>
                        <div className={styles.group}>
                            <div className={styles.label}>
                                Материал:
                            </div>
                            <FilterSelect
                                placeholder="Все материалы"
                                name="material"
                                disabled={this.getDisabledOptions('material')}
                                active={this.getActiveOptions('material')}
                                options={this.getFilterOptions('material')}
                                onChange={this.optionsChange.bind(this, 'material')}
                            />
                        </div>
                        <div className={styles.group}>
                            <div className={styles.label}>
                                Площадь:
                            </div>
                            <div className={styles.options}>
                                <FilterOptions
                                    name="area"
                                    disabled={this.getDisabledOptions('area')}
                                    active={this.getActiveOptions('area')}
                                    options={this.getFilterOptions('area')}
                                    onChange={this.optionsChange.bind(this, 'area')}
                                />
                            </div>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.label}>
                                Этажность:
                            </div>
                            <div className={styles.options}>
                                <FilterOptions
                                    name="floors"
                                    disabled={this.getDisabledOptions('floors')}
                                    active={this.getActiveOptions('floors')}
                                    options={this.getFilterOptions('floors')}
                                    onChange={this.optionsChange.bind(this, 'floors')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button
                            className={`${styles.buttonReset} button-jitney`}
                            type="button"
                            onClick={this.setInitialData}
                        >
                            <SvgIcon name="remove" />
                            <span>Сбросить</span>
                        </button>
                    </div>
                </div>
                <div className={styles.container}>
                    {loadingData && (
                        <div className={styles.loader}>
                            <div data-uk-spinner="ratio: 3" />
                        </div>
                    )}
                    {rows && (this.props.view == 'tile' ? (
                        <div className="uk-grid uk-grid-small" data-uk-grid>
                            {rows.map(row => (
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
                        rows.map(row => (
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
                            forcePage={query.page - 1}
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
    view: state.filter.view,
    pages: state.filter.pages,
})

const mapDispatchToProps = (dispatch) => ({
    setView: (view) => dispatch(setView(view)),
    setOrder: (page, order) => dispatch(setOrder(page, order)),
    setLimit: (page, number) => dispatch(setLimit(page, number)),
    setInitialData: (page, data) => dispatch(setInitialData(page, data)),
    loadData: (page) => dispatch(loadData(page)),
    setPaginatePage: (page, payload) => dispatch(setPaginatePage(page, payload)),
    updateFilters: (page, name, values) => dispatch(updateFilters(page, name, values)),
    disableEmptyFilters: (page) => dispatch(disableEmptyFilters(page)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogFilter)