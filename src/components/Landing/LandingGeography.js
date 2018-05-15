import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './LandingGeography.module.sass'

class LandingGeography extends Component {
    render() {
        return (
            <div className={styles.box}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <img src={require('../../assets/map-pin.svg')} />
                        География проектов
                    </div>
                </div>
                <div className={styles.body}>
                    <div
                        className={styles.text}
                        dangerouslySetInnerHTML={{__html:this.props.geography}}
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        geography: state.app.options.geography
    })
)(LandingGeography)
