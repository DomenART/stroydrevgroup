import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from '../UI/Link'
import styles from './AboutBox.module.sass'

@connect(state => ({
    isBrowser: state.app.isBrowser
}))
class AboutBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gutter: 10,
            offset: 0,
            hover: false
        }
        this.box = React.createRef()
        this.updateOffset = this.updateOffset.bind(this)
        this.enter = this.enter.bind(this)
        this.leave = this.leave.bind(this)
    }

    componentDidMount() {
        this.updateOffset()

        if (this.props.isBrowser) {
            window.addEventListener('resize', this.updateOffset)
            window.addEventListener('load', this.updateOffset)
        }
        if (this.box) {
            this.box.current.addEventListener('mouseenter', this.enter)
            this.box.current.addEventListener('mouseleave', this.leave)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateOffset)
        window.removeEventListener('load', this.updateOffset)
    }

    updateOffset() {
        const width = this.box.current.offsetWidth
        const offset = this.props.rect ?
            (width - this.state.gutter) / 4 : width / 2

        this.setState({
            offset: offset
        })
    }

    enter(e) {
        this.setState({
            hover: true
        })
    }

    leave(e) {
        this.setState({
            hover: false
        })
    }

    render() {
        const { back, front, parent = {}, rect } = this.props

        const style = this.state.hover ? {
            transform: `rotateX(-90deg) translateY(${this.state.offset}px)`
        } : {
            transform: `translateZ(-${this.state.offset}px)`
        }

        const parentButton = parent.title && (
            <span
                className={styles.parent}
                dangerouslySetInnerHTML={{__html:parent.title}}
            />
        )

        style.paddingTop = rect ? `calc(50% - ${this.state.gutter / 2}px)` : '100%'

        const box = (
            <div
                className={styles.box}
                style={style}
                ref={this.box}
            >
                <div
                    className={styles.front}
                    style={{
                        transform: `translateZ(${this.state.offset}px)`
                    }}
                >
                    {front}
                    {parentButton}
                </div>
                <div
                    className={styles.back}
                    style={{
                        transform: `translateY(-${this.state.offset}px) rotateX(90deg)`
                    }}
                >
                    {back}
                    {parentButton}
                </div>
            </div>
        )

        if (parent.to) {
            return (
                <Link
                    to={parent.to}
                    className={styles.container}
                    target={parent.target}
                >
                    {box}
                </Link>
            )
        } else {
            return (
                <div className={styles.container}>
                    {box}
                </div>
            )
        }

    }
}

export default AboutBox