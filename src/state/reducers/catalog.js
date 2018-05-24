const initialState = {
    view: 'tile',
    pages: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CATALOG_SET_VIEW':
            return { ...state, view: action.view };
        case 'CATALOG_SET_QUERY':
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
        case 'CATALOG_SET_FILTERS':
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
        case 'CATALOG_SET_INITIAL_DATA':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: action.data
                }
            };
        case 'CATALOG_SET_PAGINATE_PAGE':
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
        case 'CATALOG_SET_ORDER':
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
        case 'CATALOG_SET_LIMIT':
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
        case 'CATALOG_SET_TOTAL':
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
        case 'CATALOG_LOAD_PROJECTS_START':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        loadingProjects: true
                    }
                }
            };
        case 'CATALOG_LOAD_PROJECTS_SUCCESS':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: {
                        ...state.pages[action.page],
                        loadingProjects: false,
                        projects: action.data
                    }
                }
            };
        default:
            return state;
    }
};
