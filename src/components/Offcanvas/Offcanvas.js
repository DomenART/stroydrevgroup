import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Offcanvas.module.sass'

@connect(state => ({
    isDrawerOpen: state.app.isDrawerOpen,
    isBrowser: state.app.isBrowser,
}))
class Offcanvas extends Component {
    constructor(props) {
        super(props)
        this.container = React.createRef()
        this.updateOffset = this.updateOffset.bind(this)
    }

    componentDidMount() {
        this.updateOffset()

        if (this.props.isBrowser) {
            window.addEventListener('resize', this.updateOffset)
            window.addEventListener('load', this.updateOffset)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateOffset)
        window.removeEventListener('load', this.updateOffset)
    }

    updateOffset() {
        if (this.container.current) {
            const rect = this.container.current.getBoundingClientRect()

            this.props.dispatch({
                type: 'SET_CONTAINER_OFFSET',
                payload: rect
            })
        }
    }

    render() {
        const { isDrawerOpen, children } = this.props

        let offcanvasCls = [styles.offcanvas]
        if (isDrawerOpen) {
            offcanvasCls.push(styles.offcanvas_shift)
        }

        return (
            <div
                className={offcanvasCls.join(' ')}
                ref={this.container}
            >
                {children}
                <div className={styles.overlay} hidden={!isDrawerOpen} />
            </div>
        )
    }
}

export default Offcanvas
