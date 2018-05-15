
const initialState = {
    isBrowser: false,
    isDrawerOpen: false,
    options: {},
    containerOffset: {
        width: 0,
        left: 0,
        right: 0
    },
    pathname: '',
};

const TOOGLE_DRAWER = 'TOGGLE_DRAWER';
const SET_OPTIONS = 'SET_OPTIONS';
const SET_PATHNAME = 'SET_PATHNAME';
const SET_ISBROWSER = 'SET_ISBROWSER';
const SET_CONTAINER_OFFSET = 'SET_CONTAINER_OFFSET';

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ISBROWSER:
            return { ...state, isBrowser: payload };
        case TOOGLE_DRAWER:
            return { ...state, isDrawerOpen: payload };
        case SET_OPTIONS:
            return { ...state, options: payload };
        case SET_PATHNAME:
            return { ...state, pathname: payload };
        case SET_CONTAINER_OFFSET:
            return { ...state, containerOffset: payload };
        default:
            return state;
    }
};
