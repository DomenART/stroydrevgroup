import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import throttle from 'lodash/throttle'
import SvgIcon from '../UI/SvgIcon'
import styles from './FooterFixed.module.sass'

@connect(
    state => ({
        menu: state.menu.footer,
        email: state.app.options.email,
        isDrawerOpen: state.app.isDrawerOpen,
        containerOffset: state.app.containerOffset,
        isExtraLarge: state.resolution.isExtraLarge,
    })
)
class FooterFixed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fixed: true,
            minHeight: 0
        }
        this.placeholder = React.createRef()
        this.footer = React.createRef()
        this.updateMinHeight = this.updateMinHeight.bind(this)
        this.scroll = this.scroll.bind(this)
        this.listener = throttle(this.scroll, 100)
    }

    componentDidMount() {
        this.updateMinHeight()
        window.addEventListener('load', this.updateMinHeight)
        window.addEventListener('scroll', this.listener)
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.updateMinHeight)
        window.removeEventListener('scroll', this.listener)
    }

    scroll(e) {
        let bottom = this.placeholder.current.getBoundingClientRect().bottom

        if (bottom < window.innerHeight) {
            this.state.fixed && this.setState({ fixed: false })
        } else {
            !this.state.fixed && this.setState({ fixed: true })
        }
    }

    updateMinHeight() {
        this.setState({
            minHeight: this.footer.current.offsetHeight
        })
    }

    render() {
        const { menu, email, isDrawerOpen, containerOffset, isExtraLarge } = this.props
        const { fixed, minHeight } = this.state

        let classes = [styles.footer]
        if (fixed) {
            classes.push(styles.footer_fixed)
            if (isDrawerOpen) {
                classes.push(styles.footer_shift)
            }
        }

        return (
            <div
                ref={this.placeholder}
                className={styles.placeholder}
                style={{ minHeight }}
            >
                <div
                    className={classes.join(' ')}
                    ref={this.footer}
                    style={fixed && isExtraLarge ? {
                        left: containerOffset.left,
                        width: containerOffset.width
                    } : {}}
                >
                    <ul className={styles.menu}>
                        {menu.map(row => (
                            <li key={row.key}>
                                <Link
                                    to={row.slug}
                                    activeClassName={styles.active}
                                >
                                    {row.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a href={`mailto:${email}`} className={styles.email}>
                        <span className={styles.emailIcon}>
                            <SvgIcon name="envelope-thin" />
                        </span>
                        <span className={styles.emailText}>{email}</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default FooterFixed
