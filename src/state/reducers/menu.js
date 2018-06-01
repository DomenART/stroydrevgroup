const initialState = {
    about: [],
    catalog: [],
    side_first: [],
    side_second: [],
    footer: []
}

const MENU_LOAD_CATALOG = 'MENU_LOAD_CATALOG'
const MENU_LOAD_SIDE_FIRST = 'MENU_LOAD_SIDE_FIRST'
const MENU_LOAD_SIDE_SECOND = 'MENU_LOAD_SIDE_SECOND'
const MENU_LOAD_FOOTER = 'MENU_LOAD_FOOTER'
const MENU_LOAD_ABOUT = 'MENU_LOAD_ABOUT'
// export const toggleDrawer = open => ({ type: MENU_LOAD_CATALOG, payload: open });

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case MENU_LOAD_CATALOG:
            return { ...state, catalog: payload }
        case MENU_LOAD_SIDE_FIRST:
            return { ...state, side_first: payload }
        case MENU_LOAD_SIDE_SECOND:
            return { ...state, side_second: payload }
        case MENU_LOAD_FOOTER:
            return { ...state, footer: payload }
        case MENU_LOAD_ABOUT:
            return { ...state, about: payload }
        default:
            return state
    }
}