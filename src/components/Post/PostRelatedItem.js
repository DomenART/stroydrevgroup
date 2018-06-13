import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import styles from './PostRelatedItem.module.sass'
import Link from '../UI/Link'

@connect(state => ({
    isBrowser: state.app.isBrowser
}))
class PostRelatedItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lineHeight: 36
        }

        this.propgress = 0
        this.direction = 'forward'

        this.canvas = React.createRef()
        this.name = React.createRef()
        this.draw = this.draw.bind(this)
        this.prepareLines = this.prepareLines.bind(this)
        this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this)
    }

    componentDidMount() {
        this.ctx = this.canvas.current.getContext('2d')
        this.words = this.props.post_title.split(/\s+/g)

        this.prepareLines()
        if (this.props.isBrowser) {
            window.addEventListener('resize', this.prepareLines)
            window.addEventListener('load', this.prepareLines)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.prepareLines)
        window.removeEventListener('load', this.prepareLines)
    }

    prepareLines() {
        const { fontSize } = getComputedStyle(this.name.current)
        this.width = this.name.current.clientWidth
        this.height = this.name.current.clientHeight
        this.ctx.canvas.width = this.width
        this.ctx.canvas.height = this.height
        this.ctx.font = `bold ${fontSize} Open Sans`
        this.ctx.textBaseline = "middle"

        this.lines = []

        let str = ''
        let line = 1
        this.words.map((word, index) => {
            const measureWidh = this.ctx.measureText(`${str} ${word}`.trim()).width
            const height = this.state.lineHeight * .8
            if (measureWidh > this.width) {
                this.lines.push({
                    propgress: 0,
                    delay: 0,
                    text: str.trim(),
                    width: this.ctx.measureText(str.trim()).width+4,
                    height: this.state.lineHeight * .8,
                    center: (this.state.lineHeight * line - this.state.lineHeight / 2)+1,
                    left: 0,
                    top: (this.state.lineHeight * line - this.state.lineHeight / 2) - height / 2
                })
                line++
                str = word
            } else {
                str = `${str} ${word}`
            }
            if (index+1 == this.words.length) {
                this.lines.push({
                    propgress: 0,
                    delay: 0,
                    text: str.trim(),
                    width: this.ctx.measureText(str.trim()).width+4,
                    height: this.state.lineHeight * .8,
                    center: (this.state.lineHeight * line - this.state.lineHeight / 2)+1,
                    left: 0,
                    top: (this.state.lineHeight * line - this.state.lineHeight / 2) - height / 2
                })
            }
        })

        this.drawText()
    }

    drawText() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.lines.map(line => {
            this.ctx.fillStyle = "#333333"
            this.ctx.fillText(line.text, 2, line.center)
        })
    }

    draw() {
        let next = false
        this.ctx.clearRect(0, 0, this.width, this.height)

        this.lines.map((line, index) => {
            this.ctx.fillStyle = "#ffe258"
            this.ctx.fillRect(line.left, line.top,
                line.width * this.inOutQuad(line.propgress),
                line.height)
            this.ctx.fillStyle = "#333333"
            this.ctx.fillText(line.text, 2, line.center)

            if (
                this.direction == 'forward' && line.propgress < 1 ||
                this.direction == 'backward' && line.propgress > 0
            ) {
                if (
                    this.direction == 'forward' && line.delay < index ||
                    this.direction == 'backward' && line.delay > 0
                ) {
                    line.delay += this.direction == 'forward' ? .2 : -.2
                } else {
                    line.propgress += this.direction == 'forward' ? .035 : -.035
                }

                next = true
            }
        })

        if (next)
            requestAnimationFrame(this.draw)
    }

    inOutQuad(n) {
        n *= 2;
        if (n < 1) return 0.5 * n * n;
        return - 0.5 * (--n * (n - 2) - 1);
    }

    mouseEnterHandler() {
        this.direction = 'forward'
        requestAnimationFrame(this.draw)
    }

    mouseLeaveHandler() {
        this.direction = 'backward'
        requestAnimationFrame(this.draw)
    }

    render() {
        const { wordpress_id, post_thumbnail, post_title, post_name } = this.props
        const even = Math.random() > .5
        const img = even ?
            post_thumbnail.localFile.childImageSharp.square :
            post_thumbnail.localFile.childImageSharp.rectangle

        return (
            <div
                className={classNames(styles.item, {
                    [styles.item_even]: even
                })}
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}
            >
                <Link
                    to={`/${post_name}`}
                    className={styles.image}
                >
                    <img
                        {...img}
                        alt={post_title}
                    />
                </Link>
                <div
                    ref={this.name}
                    className={styles.name}
                >
                    <Link to={`/${post_name}`}>
                        <div dangerouslySetInnerHTML={{__html:post_title}} />
                        <canvas ref={this.canvas} />
                    </Link>
                </div>
            </div>
        )
    }
}

export default PostRelatedItem