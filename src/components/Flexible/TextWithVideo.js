import React, { Component } from 'react'
import { connect } from 'react-redux'
import truncate from 'lodash/truncate'
import SvgIcon from '../UI/SvgIcon'
import styles from './TextWithVideo.module.sass'

@connect(state => ({
    resolution: state.resolution
}))
class TextWithVideo extends Component {
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
        const { text, video } = this.props
        const { isExtraSmall } = this.props.resolution

        return (
            <div className={`${styles.section} uk-grid`} data-uk-grid>
                <div className={`${styles.text} uk-width-1-2@l`}>
                    <div dangerouslySetInnerHTML={{
                        __html: !expand && isExtraSmall ?
                            truncate(text, { length: 200 }) : text
                    }} />
                    {isExtraSmall && !expand && (
                        <button
                            className={`${styles.more} button-jitney`}
                            onClick={this.showFullText}
                        >
                            Полностью
                            <SvgIcon name="arrow-right" />
                        </button>
                    )}
                </div>

                <div className="uk-width-1-2@l">
                    <figure className={styles.figure}>
                        <video controls>
                            <source src={video.localFile.publicURL} type={video.mime_type} />
                        </video>
                        <figcaption dangerouslySetInnerHTML={{ __html: video.title }} />
                    </figure>
                </div>
            </div>
        )
    }
}

export default TextWithVideo
