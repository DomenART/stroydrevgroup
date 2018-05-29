import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    FacebookShareButton,
    FacebookIcon,
    MailruShareButton,
    MailruIcon,
    GooglePlusShareButton,
    GooglePlusIcon,
    PinterestShareButton,
    PinterestIcon,
    OKShareButton,
    OKIcon,
    VKShareButton,
    VKIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'react-share'
import styles from './Share.module.sass'

@connect(
    state => ({
        pathname: state.app.pathname,
        resolution: state.resolution
    })
)
class Share extends Component {
    render() {
        const { isMediumMax, isExtraSmall } = this.props.resolution

        let iconSize = 48

        if (this.props.size) {
            iconSize = this.props.size
        } else {
            if (isMediumMax) {
                iconSize = 42
            }
            if (isExtraSmall) {
                iconSize = 37
            }
        }

        return (
            <div className={styles.box}>
                <FacebookShareButton
                    url={this.props.pathname}
                    children={<FacebookIcon size={iconSize} />}
                />
                <MailruShareButton
                    url={this.props.pathname}
                    children={<MailruIcon size={iconSize} />}
                />
                <GooglePlusShareButton
                    url={this.props.pathname}
                    children={<GooglePlusIcon size={iconSize} />}
                />
                {/*<PinterestShareButton
                    url={this.props.pathname}
                    children={<PinterestIcon size={iconSize} />}
                />*/}
                <OKShareButton
                    url={this.props.pathname}
                    children={<OKIcon size={iconSize} />}
                />
                <VKShareButton
                    url={this.props.pathname}
                    children={<VKIcon size={iconSize} />}
                />
                <TwitterShareButton
                    url={this.props.pathname}
                    children={<TwitterIcon size={iconSize} />}
                />
            </div>
        )
    }
}

export default Share