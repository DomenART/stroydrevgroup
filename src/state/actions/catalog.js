import queryString from 'jquery-param'
import config from '../../config.json'
import axios from 'axios'

export function setInitialData(page, data) {
    return dispatch => {
        dispatch({
            type: 'CATALOG_SET_INITIAL_DATA',
            page,
            data
        })
        dispatch(loadProjects(page))
        dispatch(disableEmptyFilters(page))
    }
}

export function setTotal(page, total, totalPages) {
    return {
        type: 'CATALOG_SET_TOTAL',
        page,
        total,
        totalPages
    }
}

export function setLimit(page, number) {
    return dispatch => {
        dispatch({
            type: 'CATALOG_SET_LIMIT',
            page,
            number
        })
        dispatch(loadProjects(page))
    }
}

export function setOrder(page, order) {
    return dispatch => {
        dispatch({
            type: 'CATALOG_SET_ORDER',
            page,
            order
        })
        dispatch(loadProjects(page))
    }
}

export function setView(view) {
    return {
        type: 'CATALOG_SET_VIEW',
        view
    }
}

export function updateFilters(page, name, values) {
    return (dispatch, getState) => {
        const filters = JSON.parse(JSON.stringify(getState().catalog.pages[page].filters))
        const query = JSON.parse(JSON.stringify(getState().catalog.pages[page].query))

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
            type: 'CATALOG_SET_FILTERS',
            page,
            filters
        })
        dispatch({
            type: 'CATALOG_SET_QUERY',
            page,
            query
        })
        dispatch(disableEmptyFilters(page))
        dispatch(loadProjects(page))
    }
}

export function disableEmptyFilters(page) {
    return (dispatch, getState) => {
        const query = getState().catalog.pages[page].query
        const filters = getState().catalog.pages[page].filters

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
                axios.get(`${config.API_URL}wp/v2/project?${queryString(new_query)}`)
                .then(response => {
                    if (!filters[group][key].active) {
                        filters[group][key].disabled = response.data.length === 0
                    }
                    dispatch({
                        type: 'CATALOG_SET_FILTERS',
                        page,
                        filters
                    })
                })
            })
        })
    }
}

export function loadProjects(page) {
    return (dispatch, getState) => {
        dispatch({
            type: 'CATALOG_LOAD_PROJECTS_START',
            page
        })

        const query = queryString(getState().catalog.pages[page].query)

        axios.get(`${config.API_URL}wp/v2/project?${query}`)
        .then(response => {
            dispatch(setTotal(
                page,
                Number(response.headers['x-wp-total']),
                Number(response.headers['x-wp-totalpages'])
            ))

            dispatch({
                type: 'CATALOG_LOAD_PROJECTS_SUCCESS',
                page,
                projects: response.data
            })
        })
    }
}