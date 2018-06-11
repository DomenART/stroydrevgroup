import { combineReducers } from 'redux'
import app from './app'
import menu from './menu'
import resolution from './resolution'
import filter from './filter'

export default combineReducers({
    app,
    menu,
    resolution,
    filter
})
