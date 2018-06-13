import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import HeaderSearch from './HeaderSearch'
import styles from './Header.module.sass'
import SvgIcon from '../UI/SvgIcon'

class Header extends Component {
    render() {
        const { isDrawerOpen } = this.props

        let headerCls = [styles.header]
        if (isDrawerOpen) {
            headerCls.push(styles.header_shift)
        }

        return (
            <header className={headerCls.join(' ')}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={require('../../assets/logo.png')} alt="" />
                    </Link>
                </div>
                <div className={styles.phone}>
                    8 (800) 123-45-67
                </div>
                <div className={styles.slogan}>
                    Строительство деревянных домов <br />
                    и бань под ключ по России и СНГ
                </div>
                {/* <div className={styles.search}>
                    <HeaderSearch />
                </div> */}
                {/* <div className={styles.nav}>
                    <Link to="/katalog" className={styles.catalog}>
                        Каталог проектов
                    </Link>
                    <div className={styles.search}>
                        <HeaderSearch />
                    </div>
                    <Link to="/search" className={styles.searchBtn}>
                        <SvgIcon name="search" />
                    </Link>
                </div> */}
                <div className={styles.callback}>
                    <div className={styles.callbackTime}>
                        Кроме воскресенья<br />
                        с <b>09.00</b> до <b>20.00</b>
                    </div>
                    <button className={styles.callbackButton}>
                        <SvgIcon name="telephone" />
                    </button>
                </div>
            </header>
        )
    }
}

export default connect(
    state => ({
        isDrawerOpen: state.app.isDrawerOpen
    })
)(Header)
