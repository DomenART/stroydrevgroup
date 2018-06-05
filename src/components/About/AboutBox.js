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
            width: 0,
            hover: false
        }
        this.box = React.createRef()
        this.updateWidth = this.updateWidth.bind(this)
        this.enter = this.enter.bind(this)
        this.leave = this.leave.bind(this)
    }

    componentDidMount() {
        this.updateWidth()
        if (this.props.isBrowser) {
            window.addEventListener('resize', this.updateWidth)
            window.addEventListener('load', this.updateWidth)
        }
        if (this.box) {
            this.box.current.addEventListener('mouseenter', this.enter)
            this.box.current.addEventListener('mouseleave', this.leave)
        }
    }

    componentWillUnmount() {
        if (this.box) {
            this.box.current.addEventListener('mouseenter', this.enter)
            this.box.current.addEventListener('mouseleave', this.leave)
        }
        window.removeEventListener('resize', this.updateWidth)
        window.removeEventListener('load', this.updateWidth)
    }

    updateWidth() {
        this.setState({
            width: this.box.current.offsetWidth
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
        const offset = this.props.rect ?
            (this.state.width - this.state.gutter) / 4 :
            this.state.width / 2
        const style = this.state.hover ? {
            transform: `rotateX(-90deg) translateY(${offset}px)`
        } : {
            transform: `translateZ(-${offset}px)`
        }
        const parentButton = parent.title && (
            <span
                className={styles.parent}
                dangerouslySetInnerHTML={{__html:parent.title}}
            />
        )

        style.paddingTop = this.props.rect ? `calc(50% - ${this.state.gutter / 2}px)` : '100%'
        console.log(style)

        const box = (
            <div
                className={styles.box}
                style={style}
                ref={this.box}
            >
                <div
                    className={styles.front}
                    style={{
                        transform: `translateZ(${offset}px)`
                    }}
                >
                    {front}
                    {parentButton}
                </div>
                <div
                    className={styles.back}
                    style={{
                        transform: `translateY(-${offset}px) rotateX(90deg)`
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