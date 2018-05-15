import React, { Component } from 'react'
import { connect } from 'react-redux'
import enhanceWithClickOutside from 'react-click-outside'
import Scroll from '../../utils/scroll'
import Bar from './Bar'
import Side from './Side'
import styles from './Sidebar.module.sass'

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.drawerToggle = this.drawerToggle.bind(this)
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'TOGGLE_DRAWER',
            payload: false
        })
    }

    handleClickOutside() {
        this.props.dispatch({
            type: 'TOGGLE_DRAWER',
            payload: false
        })
    }

    drawerToggle() {
        this.props.dispatch({
            type: 'TOGGLE_DRAWER',
            payload: !this.props.isDrawerOpen
        })
    }

    render() {
        const {
            isDrawerOpen, isBrowser, isMediumMax, isExtraLarge,
            containerOffset, copyright, phone, catalog, about, info
        } = this.props

        let boxCls = [styles.box]
        if (isDrawerOpen) {
            boxCls.push(styles.box_shift)
        }

        if (isBrowser) {
            if (isDrawerOpen && isMediumMax) {
                document.documentElement.classList.add('modal-page')
            } else {
                document.documentElement.classList.remove('modal-page')
            }
        }

        return (
            <aside
                className={boxCls.join(' ')}
                style={isExtraLarge ? {
                    left: containerOffset.left
                }: {}}
            >
                <Bar
                    isDrawerOpen={isDrawerOpen}
                    toggle={this.drawerToggle}
                    copyright={copyright}
                />
                <Side
                    setRef={el => this.sideElement = el}
                    isDrawerOpen={isDrawerOpen}
                    phone={phone}
                    catalog={catalog}
                    about={about}
                    info={info}
                />
            </aside>
        )
    }
}

export default connect(
    state => ({
        isDrawerOpen: state.app.isDrawerOpen,
        isBrowser: state.app.isBrowser,
        containerOffset: state.app.containerOffset,
        isMediumMax: state.resolution.isMediumMax,
        isExtraLarge: state.resolution.isExtraLarge,
        copyright: state.app.options.copyright,
        phone: state.app.options.phone,
        catalog: state.menu.catalog,
        about: state.menu.about,
        info: state.menu.info,
    })
)(enhanceWithClickOutside(Sidebar))
