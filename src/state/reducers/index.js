import { combineReducers } from 'redux'
import app from './app'
import menu from './menu'
import resolution from './resolution'
import catalog from './catalog'

export default combineReducers({
    app,
    menu,
    resolution,
    catalog
})
