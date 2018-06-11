import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import FilterOptions from '../Filter/FilterOptions'
import ArticlesGridExtraSmall from './ArticlesGridExtraSmall'
import ArticlesGridLarge from './ArticlesGridLarge'
import ArticlesGridMedium from './ArticlesGridMedium'
import ArticlesGridSmall from './ArticlesGridSmall'
import ArticlesGridExtraLarge from './ArticlesGridExtraLarge'
import Paginate from '../UI/Paginate'
import SvgIcon from '../UI/SvgIcon'
import styles from './ArticlesFilter.module.sass'
import {
    setView,
    setInitialData,
    setPaginatePage,
    setLimit,
    setOrder,
    loadData,
    updateFilters,
    updateTags,
    disableEmptyFilters,
} from '../../state/actions/filter';

class ArticlesFilter extends Component {
    constructor(props) {
        super(props)

        this.initialData = {
            endpoint: 'posts',
            loadingData: false,
            total: 0,
            totalPages: 0,
            rows: [],
            filters: {},
            query: {
                page: 1,
                per_page: 14,
                tags: [],
                categories: this.props.rubric
            }
        }

        this.setInitialData = this.props.setInitialData.bind(this, this.props.page_id, this.initialData)
        this.setPaginatePage = this.props.setPaginatePage.bind(this, this.props.page_id)
        this.setLimit = this.props.setLimit.bind(this, this.props.page_id)
        this.setOrder = this.props.setOrder.bind(this, this.props.page_id)
        this.updateFilters = this.props.updateFilters.bind(this, this.props.page_id)
        this.updateTags = this.props.updateTags.bind(this, this.props.page_id)

        if (!this.props.pages[this.props.page_id]) {
            this.setInitialData()
        }
    }

    getFilterTags() {
        const { tags } = this.props
        const options = {}
        Object.keys(tags).forEach(key => {
            options[tags[key].wordpress_id] = tags[key].name
        })
        return options
    }

    tagsChange(tags) {
        this.updateTags(tags)
    }

    getArticleTags(rowTags) {
        const { tags } = this.props

        return rowTags.map(tag => (
            <button
                key={tag}
                onClick={() => this.tagsChange([String(tag)])}
                dangerouslySetInnerHTML={{
                    __html: tags.find(row => row.wordpress_id == tag).name
                }}
            />
        ))
    }

    getGrid(rows) {
        const { isExtraSmallMax, isSmall, isMedium, isLarge, isExtraLarge } = this.props.resolution

        if (isExtraSmallMax) {
            return (
                <ArticlesGridExtraSmall rows={rows} />
            )
        }

        if (isExtraLarge) {
            return (
                <ArticlesGridExtraLarge rows={rows} />
            )
        }

        if (isLarge) {
            return (
                <ArticlesGridLarge rows={rows} />
            )
        }

        if (isMedium) {
            return (
                <ArticlesGridMedium rows={rows} />
            )
        }

        if (isSmall) {
            return (
                <ArticlesGridSmall rows={rows} />
            )
        }
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
            totalPages,
            loadingData,
            rows,
            query
        } = this.props.pages[this.props.page_id]

        return (
            <Fragment>
                <div className={styles.filter}>
                    <div className={styles.title}>
                        Выберите<br />
                        раздел:
                    </div>
                    <div className={styles.filters}>
                        <div className={styles.group}>
                            <div className={styles.options}>
                                <FilterOptions
                                    name="tags"
                                    active={query.tags}
                                    options={this.getFilterTags()}
                                    onChange={this.tagsChange.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button
                            className={classNames(styles.buttonReset, 'button-jitney')}
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
                    {rows.length && this.getGrid(rows.map(row => ({
                        ...row,
                        tags: this.getArticleTags(row.tags)
                    })))}
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
    resolution: state.resolution
})

const mapDispatchToProps = (dispatch) => ({
    setView: (view) => dispatch(setView(view)),
    setOrder: (page, order) => dispatch(setOrder(page, order)),
    setLimit: (page, number) => dispatch(setLimit(page, number)),
    setInitialData: (page, data) => dispatch(setInitialData(page, data)),
    loadData: (page) => dispatch(loadData(page)),
    setPaginatePage: (page, payload) => dispatch(setPaginatePage(page, payload)),
    updateFilters: (page, name, values) => dispatch(updateFilters(page, name, values)),
    updateTags: (page, name, values) => dispatch(updateTags(page, name, values)),
    disableEmptyFilters: (page) => dispatch(disableEmptyFilters(page)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesFilter)