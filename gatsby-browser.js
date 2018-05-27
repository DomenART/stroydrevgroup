import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

const store = require('./src/state/createStore')()

exports.replaceRouterComponent = ({ history }) => {

    const ConnectedRouterWrapper = ({ children }) => (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    )

    return ConnectedRouterWrapper
}

exports.onClientEntry = () => {
    window.UIkit = require('uikit')

    store.dispatch({
        type: 'SET_ISBROWSER',
        payload: true
    })

    const queries = {
        isLargeMax: window.matchMedia("(max-width: 1599px)"), // 0 to 1600
        isMediumMax: window.matchMedia("(max-width: 1279px)"), // 0 to 1600
        isExtraSmall: window.matchMedia("(max-width: 767px)"), // 0 to 768
        isSmall: window.matchMedia("(min-width: 768px)"), // 768 to 960
        isMedium: window.matchMedia("(min-width: 960px)"), // 960 to 1280
        isLarge: window.matchMedia("(min-width: 1280px)"), // 1280 to 1600
        isExtraLarge: window.matchMedia("(min-width: 1600px)"), // 1600 to 1900
        isUltraLarge: window.matchMedia("(min-width: 1900px)"), // 1900 to ~
    }
    Object.keys(queries).map(key => {
        let payload = {}
        payload[key] = queries[key].matches
        store.dispatch({
            type: 'SET_RESOLUTION',
            payload: payload
        })

        queries[key].addListener(e => {
            let payload = {}
            payload[key] = e.matches
            store.dispatch({
                type: 'SET_RESOLUTION',
                payload: payload
            })
        })
    })
}