import React, { Component } from 'react'
import { connect } from 'react-redux'
import AboutBox from './AboutBox'
import styles from './AboutServices.module.sass'
import SvgIcon from '../UI/SvgIcon';

class AboutServices extends Component {
    render() {
        const { isSmall } = this.props.resolution

        return (
            <AboutBox
                rect={isSmall}
                parent={{
                    to: "/",
                    title: "услуги"
                }}
                back={(
                    <div className={styles.back}>
                        <div className={styles.backIconWrap}>
                            <div className={styles.backIcon}>
                                <SvgIcon name="banner-1" />
                            </div>
                        </div>
                        <div className={styles.backInfo}>
                            <div className={styles.backTitle}>
                                Водоснабжение + отопление<br />
                                + электричество
                            </div>
                            <div className={styles.backSubTitle}>
                                Дополнительные услуги
                            </div>
                        </div>
                    </div>
                )}
                front={(
                    <div className={styles.front}>
                        <div className={styles.frontIconWrap}>
                            <div className={styles.frontIcon}>
                                <SvgIcon name="banner-1" />
                            </div>
                        </div>
                        <div className={styles.frontInfo}>
                            <div className={styles.frontTitle}>
                                Водоснабжение + отопление<br />
                                + электричество
                            </div>
                            <div className={styles.frontSubTitle}>
                                Дополнительные услуги
                            </div>
                        </div>
                    </div>
                )}
            />
        )
    }
}

export default connect(
    state => ({
        resolution: state.resolution
    })
)(AboutServices)