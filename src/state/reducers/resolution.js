
const initialState = {
    isExtraSmallMax: false, // 0 to 768
    isLargeMax: false, // 0 to 1600
    isMediumMax: false, // 0 to 1280

    isExtraSmall: false, // from 480
    isSmall: false, // from 768
    isMedium: false, // from 960
    isLarge: false, // from 1280
    isExtraLarge: false, // from 1600
    isUltraLarge: false, // from 1900
};

const SET_RESOLUTION = 'SET_RESOLUTION';

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_RESOLUTION:
            return { ...state, ...payload };
        default:
            return state;
    }
};
