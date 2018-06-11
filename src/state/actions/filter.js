import queryString from 'jquery-param'
import config from '../../config.json'
import axios from 'axios'

export function setInitialData(page, data) {
    return dispatch => {
        dispatch({
            type: 'FILTER_SET_INITIAL_DATA',
            page,
            data
        })
        dispatch(loadData(page))
        dispatch(disableEmptyFilters(page))
    }
}

export function setPaginatePage(page, payload) {
    return dispatch => {
        dispatch({
            type: 'FILTER_SET_PAGINATE_PAGE',
            page,
            selected: payload.selected + 1
        })
        dispatch(loadData(page))
    }
}

export function setTotal(page, total, totalPages) {
    return {
        type: 'FILTER_SET_TOTAL',
        page,
        total,
        totalPages
    }
}

export function setLimit(page, number) {
    return dispatch => {
        dispatch({
            type: 'FILTER_SET_LIMIT',
            page,
            number
        })
        dispatch(loadData(page))
    }
}

export function setOrder(page, order) {
    return dispatch => {
        dispatch({
            type: 'FILTER_SET_ORDER',
            page,
            order
        })
        dispatch(loadData(page))
    }
}

export function setView(view) {
    return {
        type: 'FILTER_SET_VIEW',
        view
    }
}

export function updateFilters(page, name, values) {
    return (dispatch, getState) => {
        const filters = JSON.parse(JSON.stringify(getState().filter.pages[page].filters))
        const query = JSON.parse(JSON.stringify(getState().filter.pages[page].query))

        query.page = 1

        Object.keys(values).forEach(key => {
            filters[name][key] = {
                ...filters[name][key],
                ...values[key]
            }
            if (values[key].active) {
                query.filter.meta_query[name] = {
                    ...query.filter.meta_query[name],
                    relation: 'OR',
                    [key]: {
                        key: name,
                        value: filters[name][key].value,
                        compare: filters[name][key].compare,
                        type: filters[name][key].type
                    }
                }
            } else {
                if (query.filter.meta_query[name]) {
                    delete query.filter.meta_query[name][key]
                }
            }
        })

        dispatch({
            type: 'FILTER_SET_FILTERS',
            page,
            filters
        })
        dispatch({
            type: 'FILTER_SET_QUERY',
            page,
            query
        })
        dispatch(disableEmptyFilters(page))
        dispatch(loadData(page))
    }
}

export function updateTags(page, tags) {
    return (dispatch, getState) => {
        const query = JSON.parse(JSON.stringify(getState().filter.pages[page].query))

        query.page = 1
        query.tags = tags

        dispatch({
            type: 'FILTER_SET_QUERY',
            page,
            query
        })
        dispatch(disableEmptyFilters(page))
        dispatch(loadData(page))
    }
}

export function disableEmptyFilters(page) {
    return (dispatch, getState) => {
        const state = getState()
        const filterPage = state.filter.pages[page]
        const query = filterPage.query
        const filters = filterPage.filters

        Object.keys(filters).forEach(group => {
            Object.keys(filters[group]).forEach(key => {
                const new_query = {
                    ...query,
                    per_page: 1,
                    filter: {
                        ...query.filter,
                        meta_query: {
                            ...query.filter.meta_query,
                            [group]: {
                                [key]: {
                                    key: group,
                                    value: filters[group][key].value,
                                    compare: filters[group][key].compare,
                                    type: filters[group][key].type
                                }
                            }
                        }
                    }
                }
                axios.get(`${config.API_URL}wp/v2/${filterPage.endpoint}?${queryString(new_query)}`)
                .then(response => {
                    if (!filters[group][key].active) {
                        filters[group][key].disabled = response.data.length === 0
                    }
                    dispatch({
                        type: 'FILTER_SET_FILTERS',
                        page,
                        filters
                    })
                })
            })
        })
    }
}

export function loadData(page) {
    return (dispatch, getState) => {
        dispatch({
            type: 'FILTER_LOAD_DATA_START',
            page
        })
        const state = getState()
        const filterPage = state.filter.pages[page]
        const query = queryString(filterPage.query)

        axios.get(`${config.API_URL}wp/v2/${filterPage.endpoint}?${query}`)
        .then(response => {
            dispatch(setTotal(
                page,
                Number(response.headers['x-wp-total']),
                Number(response.headers['x-wp-totalpages'])
            ))

            dispatch({
                type: 'FILTER_LOAD_DATA_SUCCESS',
                page,
                rows: response.data
            })
        })
    }
}