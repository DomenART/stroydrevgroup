import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import styles from './ToolbarMobile.module.sass'
import SvgIcon from '../UI/SvgIcon'

class ToolbarMobile extends Component {
    render() {
        const { isDrawerOpen } = this.props

        let toolbarCls = [styles.toolbar]
        if (isDrawerOpen) {
            toolbarCls.push(styles.toolbar_shift)
        }

        return (
            <div className={toolbarCls.join(' ')}>
                <button className={styles.button}>
                    <SvgIcon name="telephone" />
                </button>
                <button
                    className={styles.button}
                    data-uk-toggle="target: #Calculation"
                >
                    <SvgIcon name="calculator" />
                </button>
            </div>
        )
    }
}


export default connect(
    state => ({
        isDrawerOpen: state.app.isDrawerOpen
    })
)(ToolbarMobile)
