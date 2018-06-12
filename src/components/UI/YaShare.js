import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './YaShare.module.sass'

class YaShare extends Component {
    constructor(props) {
        super(props)

        this.shareEl = React.createRef()
    }

    componentDidMount() {
        const { counter = false } = this.props

        this.share = Ya.share2(this.shareEl.current, {
            theme: {
                services: 'vkontakte,facebook,odnoklassniki,moimir,gplus,twitter',
                counter: counter,
                size: 'm',
                bare: false
            }
        })
    }

    render() {
        const cls = classNames(styles.share, {
            [styles[`share_${this.props.size}`]]: true
        })

        return (
            <div
                className={cls}
                ref={this.shareEl}
            />
        )
    }
}

export default YaShare