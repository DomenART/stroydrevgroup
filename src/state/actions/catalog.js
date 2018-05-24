import queryString from 'jquery-param'
import config from '../../config.json'
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

export function setInitialData(page, data) {
    return {
        type: 'CATALOG_SET_INITIAL_DATA',
        page,
        data
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

export function setFilters(page, filters) {
    return {
        type: 'CATALOG_SET_FILTERS',
        page,
        filters
    }
}

export function updateFilters(page, name, values) {
    return (dispatch, getState) => {
        const filters = JSON.parse(JSON.stringify(getState().catalog.pages[page].filters))
        const query = JSON.parse(JSON.stringify(getState().catalog.pages[page].query))

        Object.keys(values).forEach(key => {
            filters[name][key] = {
                ...filters[name][key],
                ...values[key]
            }
            if (values[key].active) {
                if (!query.filter.meta_query[name]) {
                    query.filter.meta_query[name] = {relation: 'OR'}
                }
                query.filter.meta_query[name] = {
                    ...query.filter.meta_query[name],
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

        query.page = 1

        dispatch({
            type: 'CATALOG_SET_QUERY',
            page,
            query
        })

        dispatch(loadProjects(page))
    }
}

export function loadProjects(page) {
    return (dispatch, getState) => {
        dispatch({
            type: 'CATALOG_LOAD_PROJECTS_START',
            page
        })

        const query = queryString(getState().catalog.pages[page].query)

        fetch(`${config.API_URL}wp/v2/project?${query}`)
        .then(response => {
            dispatch(setTotal(
                page,
                Number(response.headers.get('x-wp-total')),
                Number(response.headers.get('x-wp-totalpages'))
            ))
            return response.json()
        })
        .then(data => {
            dispatch({
                type: 'CATALOG_LOAD_PROJECTS_SUCCESS',
                page,
                data
            })
        })
    }
}

// когда меняем query загружаем projects и отключаем фильтры

// action set page
    // запускает loadProjects

// action set per_page
    // запускает loadProjects

// action set orderby & order
    // запускает loadProjects

// action anable filter

// action disable filter

// action activate filter
    // запускает loadProjects & prepareFilters

// action deactivate filter
    // запускает loadProjects & prepareFilters