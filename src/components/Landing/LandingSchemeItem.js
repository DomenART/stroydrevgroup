import React, { Component } from 'react'
import { connect } from 'react-redux'
import SvgIcon from '../UI/SvgIcon'
import styles from './LandingSchemeItem.module.sass'

@connect(state => ({
    resolution: state.resolution
}))
class LandingSchemeItem extends Component {
    render() {
        const { text, text_small, image, arrow } = this.props
        const { isExtraSmall } = this.props.resolution

        return (
            <div className={styles.box}>
                <div className={styles.image}>
                    <img src={image.localFile.publicURL} alt="" />
                </div>
                <div className={styles.check}>
                    <SvgIcon name="check" />
                </div>
                <SvgIcon className={styles.arrow} name={arrow} />
                <div
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                        __html: isExtraSmall ? text_small : text
                    }}
                />
            </div>
        )
    }
}

export default LandingSchemeItem