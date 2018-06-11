const initialState = {
    view: 'tile',
    pages: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_SET_VIEW':
            return { ...state, view: action.view };
        case 'FILTER_SET_QUERY':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        query: action.query
                    }
                }
            };
        case 'FILTER_SET_FILTERS':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        filters: action.filters
                    }
                }
            };
        case 'FILTER_SET_INITIAL_DATA':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: action.data
                }
            };
        case 'FILTER_SET_PAGINATE_PAGE':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        query: {
                            ...state.pages[action.page].query,
                            page: action.selected
                        }
                    }
                }
            };
        case 'FILTER_SET_ORDER':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        query: {
                            ...state.pages[action.page].query,
                            orderby: action.order.by,
                            order: action.order.dir
                        }
                    }
                }
            };
        case 'FILTER_SET_LIMIT':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        query: {
                            ...state.pages[action.page].query,
                            per_page: action.number
                        }
                    }
                }
            };
        case 'FILTER_SET_TOTAL':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        total: action.total,
                        totalPages: action.totalPages
                    }
                }
            };
        case 'FILTER_LOAD_DATA_START':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        loadingData: true
                    }
                }
            };
        case 'FILTER_LOAD_DATA_SUCCESS':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        loadingData: false,
                        rows: action.rows
                    }
                }
            };
        default:
            return state;
    }
};
