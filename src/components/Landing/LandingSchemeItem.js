import React, { Component } from 'react'
import { connect } from 'react-redux'
import SvgIcon from '../UI/SvgIcon'
import styles from './LandingSchemeItem.module.sass'

@connect(state => ({
    resolution: state.resolution
}))
class LandingSchemeItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inview: false
        }

        this.scrollspy = React.createRef()
    }

    componentDidMount() {
        UIkit.util.on(this.scrollspy.current, 'inview', (e) => {
            this.setState({
                inview: true
            })
        })
    }

    render() {
        const { text, text_small, image } = this.props
        const { isExtraSmall } = this.props.resolution

        const arrowCls = [styles.arrow]
        if (this.state.inview) {
            arrowCls.push(styles.arrow_inview)
        }

        return (
            <div
                className={styles.box}
                ref={this.scrollspy}
            >
                <div className={styles.image}>
                    <img src={image.localFile.publicURL} alt="" />
                </div>
                <div className={styles.check}>
                    <SvgIcon name="check" />
                </div>
                <div
                    className={arrowCls.join(' ')}
                    ref={this.arrow}
                >
                    <span /><span /><span /><span /><span />
                    <SvgIcon name="arrow-scheme" />
                </div>
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