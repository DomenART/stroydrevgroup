import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import styles from './Menu.module.sass'
import SvgIcon from '../UI/SvgIcon'

@connect(state => ({
    resolution: state.resolution
}))
class Item extends Component {
    constructor(props) {
        super(props)
        this.state = { expand: false }
        this.timer = null
        this.expand = this.expand.bind(this)
        this.collapse = this.collapse.bind(this)
        this.toggle = this.toggle.bind(this)
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
    }

    componentDidMount() {
        this.setOffset()
    }

    setOffset() {
        if (this.refs.children) {
            const children = this.refs.children

            if (!this.isDrawer()) {
                const offset = this.refs.item.getBoundingClientRect()
                const remainder =
                    children.offsetHeight -
                    children.lastChild.offsetHeight -
                    offset.top
                const paddingTop =
                    remainder < 0 ?
                        offset.top + remainder :
                        offset.top

                children.style.paddingTop = `${paddingTop}px`
            } else {
                children.style.paddingTop = 0
            }
        }
    }

    expand() {
        this.setOffset()
        this.setState(prev => ({ expand: true }))
    }

    collapse() {
        this.setState(prev => ({ expand: false }))
    }

    toggle(e) {
        e.preventDefault()
        this.setOffset()
        this.setState(prev => ({ expand: !prev.expand }))
    }

    mouseEnter() {
        if (this.isDrawer()) return false

        clearTimeout(this.timer)
        this.timer = setTimeout(this.expand, 200)
    }

    mouseLeave() {
        if (this.isDrawer()) return false

        clearTimeout(this.timer)
        this.timer = setTimeout(this.collapse, 200)
    }

    isDrawer() {
        return (
            this.props.resolution.isMediumMax
        )
    }

    render() {
        const { title, slug, children = null } = this.props
        const classes = []

        children && classes.push(styles.parent)
        this.state.expand && classes.push(styles.expand)

        return (
            <li
                className={classes.join(' ')}
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
                ref="item"
            >
                <Link to={slug} activeClassName={styles.active}>
                    {title}
                    {children && (
                        <span className={styles.arrow} onClick={this.toggle}>
                            <SvgIcon name="small-chevron-right" />
                        </span>
                    )}
                </Link>
                {children && (
                    <div className={styles.children} ref="children">
                        <Menu type="inner" items={children} />
                    </div>
                )}
            </li>
        )
    }
}

const Menu = ({ items, type }) =>
    <ul className={[styles[type], styles.list].join(' ')}>
        {items.map(row => React.createElement(Item, row))}
    </ul>

export default Menu
