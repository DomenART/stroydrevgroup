import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import styles from './HeaderMobile.module.sass'
import SvgIcon from '../UI/SvgIcon'

class Header extends Component {
    constructor(props) {
        super(props);
        this.header = React.createRef()
        this.drawerToggle = this.drawerToggle.bind(this)
    }

    componentDidMount() {
        UIkit.sticky(this.header.current, {
            showOnUp: true,
            animation: 'uk-animation-slide-top'
        })
    }

    drawerToggle() {
        this.props.dispatch({
            type: 'TOGGLE_DRAWER',
            payload: !this.props.isDrawerOpen
        })
    }

    render() {
        const { isDrawerOpen } = this.props

        let headerCls = [styles.header]
        if (isDrawerOpen) {
            headerCls.push(styles.header_shift)
        }

        let toggleCls = [styles.toggle]
        if (isDrawerOpen) {
            toggleCls.push(styles.toggle_close)
        }

        return (
            <header
                className={headerCls.join(' ')}
                ref={this.header}
            >
                <button
                    className={toggleCls.join(' ')}
                    onClick={this.drawerToggle}
                ><span /></button>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={require('../../assets/logo-small.png')} alt="" />
                    </Link>
                </div>
                <Link to="/contacts" className={styles.contacts}>
                    <SvgIcon name="pointer" />
                </Link>
            </header>
        )
    }
}

export default connect(
    state => ({
        isDrawerOpen: state.app.isDrawerOpen,
        resolution: state.resolution
    })
)(Header)
