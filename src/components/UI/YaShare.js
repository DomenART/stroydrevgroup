import React, { Component } from 'react'
import styles from './YaShare.module.sass'

class YaShare extends Component {
    constructor(props) {
        super(props)

        this.shareEl = React.createRef()
    }

    componentDidMount() {
        this.share = Ya.share2(this.shareEl.current, {
            theme: {
                services: 'vkontakte,facebook,odnoklassniki,moimir,gplus,twitter',
                counter: true,
                size: 'm',
                bare: false
            }
        })
    }

    render() {
        return (
            <div
                className={styles.share}
                ref={this.shareEl}
            />
        )
    }
}

export default YaShare