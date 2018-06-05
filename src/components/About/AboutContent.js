import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import truncate from 'lodash/truncate'
import styles from './AboutContent.module.sass'
import SvgIcon from '../UI/SvgIcon'

@connect(state => ({
    resolution: state.resolution
}))
class AboutContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expand: false
        }
        this.showFullText = this.showFullText.bind(this)
    }

    showFullText() {
        this.setState({
            expand: true
        })
    }

    render() {
        const { expand } = this.state
        const { text } = this.props
        const { isMediumMax } = this.props.resolution

        return (
            <div className={styles.box}>
                <div
                    className={styles.text}
                    dangerouslySetInnerHTML={{
                        __html: !expand && isMediumMax ?
                        truncate(text, { length: 450 }) : text
                    }}
                />
                {isMediumMax && !expand && (
                    <button
                    className={`${styles.more} button-jitney`}
                    onClick={this.showFullText}
                    >
                        Полностью
                        <SvgIcon name="arrow-right" />
                    </button>
                )}
            </div>
        )
    }
}

export default AboutContent