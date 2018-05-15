import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './LandingGeographyMobile.module.sass'

class LandingGeographyMobile extends Component {
    render() {
        return (
            <div className={styles.box}>
                <div className={styles.title}>
                    География работы
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
)(LandingGeographyMobile)
