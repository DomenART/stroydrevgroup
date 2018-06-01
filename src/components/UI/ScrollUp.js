import React, { Component } from 'react'
import throttle from 'lodash/throttle'
import styles from './ScrollUp.module.sass'

class ScrollUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }

        this.scroll = this.scroll.bind(this)
        this.listener = throttle(this.scroll, 100)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listener)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listener)
    }

    scroll(e) {
        if (window.scrollY > 300 && !this.state.visible) {
            this.setState({
                visible: true
            })
        }
        if (window.scrollY < 300 && this.state.visible) {
            this.setState({
                visible: false
            })
        }
    }

    render() {
        const scrollCls = [styles.scrollUp]
        if (this.state.visible) {
            scrollCls.push(styles.scrollUp_visible)
        }

        return (
            <button
                className={scrollCls.join(' ')}
                data-uk-scroll
            />
        )
    }
}

export default ScrollUp