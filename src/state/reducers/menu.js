const initialState = {
    catalog: [],
    about: [],
    info: [],
    footer: []
}

const MENU_LOAD_CATALOG = 'MENU_LOAD_CATALOG'
const MENU_LOAD_ABOUT = 'MENU_LOAD_ABOUT'
const MENU_LOAD_INFO = 'MENU_LOAD_INFO'
const MENU_LOAD_FOOTER = 'MENU_LOAD_FOOTER'
// export const toggleDrawer = open => ({ type: MENU_LOAD_CATALOG, payload: open });

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case MENU_LOAD_CATALOG:
            return { ...state, catalog: payload }
        case MENU_LOAD_ABOUT:
            return { ...state, about: payload }
        case MENU_LOAD_INFO:
            return { ...state, info: payload }
        case MENU_LOAD_FOOTER:
            return { ...state, footer: payload }
        default:
            return state
    }
}